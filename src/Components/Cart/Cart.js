//imports
import React from 'react';

//database
import { addDoc } from 'firebase/firestore';
import { db, getCollection } from '../../Firebase/firebaseConfig';

//components
import { CartContext } from '../../Context/CartContext';
import Extras from '../Extras/Extras';
import OrderSummary from '../Order Sumarry/OrderSummary';
import Date from '../Date/Date';

//styles
import './form.css';
import './cart.css';

//libraries components and icons
import { Steps, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  ScheduleOutlined,
  PlusCircleOutlined,
  CarryOutOutlined,
  SmileOutlined,
  DollarCircleOutlined,
  LoadingOutlined
} from '@ant-design/icons';

function Cart() {
  //context
  const { cart, removeItem, clear } = React.useContext(CartContext);

  //states
  const [current, setCurrent] = React.useState(0);
  const [order, setOrder] = React.useState();
  const [date, setDate] = React.useState();
  const [extras, setExtras] = React.useState();
  const [formularioEnviado, cambiarFormularioEnviado] = React.useState(false);

  const { Step } = Steps;

  //steps functions
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  //total calculate
  let totalExtras = extras?.reduce((ac, elem) => elem[1][1] + ac, 0);
  let totalCart = cart.reduce((ac, elem) => elem.item.value * elem.quantity + ac, 0);
  totalExtras = Math.round(totalExtras);
  totalCart = Math.round(totalCart);

  //rendering for steps
  function conditionalRender() {
    switch (current) {
      //"organize your visit" step
      case 0:
        return (
          <section>
            {cart[0] && <h2>Items in cart</h2>}
            {cart.map((elem) => (
              <div key={elem.item.id} className="cartListProduct">
                <div className="flexCartConteiner">
                  <img alt="product image" src={elem.item.pictureUrl} />
                  <div>
                    <h3>{elem.item.title}</h3>
                    <p>{elem.item.description}</p>
                  </div>
                  <div className="quantityAndDelete">
                    <p>
                      $ {elem.item.value} X {elem.quantity}
                    </p>
                    <Button type="primary" onClick={() => removeItem(elem.item.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
            {cart[0] && (
              <div>
                <p>
                  Total:{' $ '}
                  {Math.round(
                    cart.reduce((acc, current) => acc + current.item.value * current.quantity, 0)
                  )}
                </p>
                <Button type="primary" onClick={() => clear()}>
                  Delete all
                </Button>
              </div>
            )}
          </section>
        );
      //"Date" step
      case 1:
        return cart[0] && <Date passDate={setDate} />;
      //"Extras" step
      case 2:
        return cart[0] && <Extras passExtras={setExtras} />;
      //Payment form step
      case 3:
        return (
          cart[0] && (
            <>
              <Formik
                initialValues={{
                  fname: '',
                  lname: '',
                  email: '',
                  email2: '',
                  tel: '',
                  cardNumber: '',
                  cvv: '',
                  espDate: ''
                }}
                validate={(valores) => {
                  let errores = {};

                  if (!valores.fname) {
                    errores.fname = 'Please enter a first name';
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.fname)) {
                    errores.fname = 'The first name can only contain letters';
                  }

                  if (!valores.lname) {
                    errores.lname = 'Please enter a last name';
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lname)) {
                    errores.lname = 'The last name can only contain letters';
                  }

                  if (!valores.email) {
                    errores.email = 'Please enter an email';
                  } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)
                  ) {
                    errores.email = 'Enter a valid email';
                  }

                  if (!valores.email2) {
                    errores.email2 = 'Please repeat the email';
                  } else if (valores.email2 != valores.email) {
                    errores.email2 = 'The email must be the same';
                  }

                  if (!valores.tel) {
                    errores.tel = 'Please enter a telephone';
                  } else if (!/^\d{7,14}$/.test(valores.tel)) {
                    errores.tel = 'The phone must contain between 7 to 14 numbers.';
                  }

                  let match =
                    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                      valores.cardNumber
                    );
                  if (!valores.cardNumber) {
                    errores.cardNumber = 'Please enter a card number';
                  } else if (!match) {
                    errores.cardNumber =
                      'Enter a valid card number. It can only contain numbers. No spaces, points or letters';
                  }

                  if (!valores.cvv) {
                    errores.cvv = 'Please enter a CVV number';
                  } else if (!/^[0-9]{3,4}$/.test(valores.cvv)) {
                    errores.cvv =
                      'Enter a valid CVV. It can only contain 3-4 numbers. No spaces, points or letters';
                  }

                  if (!valores.espDate) {
                    errores.espDate = 'Please enter an expiration date';
                  } else if (!/^[0-1][0-9]\/[0-9]{2}$/.test(valores.espDate)) {
                    errores.espDate = 'Enter a valid expiration date. It must be as format MM/YY';
                  }

                  return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                  const addOrder = async () => {
                    try {
                      const collection = getCollection(db, 'orders');
                      const addDocument = await addDoc(collection, {
                        buyer: valores,
                        items: cart,
                        total: cart.reduce((ac, elem) => {
                          return elem.item.value * elem.quantity + ac;
                        }, 0)
                      }).then(function (docRef) {
                        setOrder({
                          id: docRef.id,
                          date: date,
                          buyer: valores,
                          items: cart,
                          total: totalCart + totalExtras
                        });
                      });
                      if (addDocument?._key?.path?.segments?.[1] !== '') {
                        setCurrent(current + 1);
                        resetForm();
                        cambiarFormularioEnviado(true);
                        clear();
                        setTimeout(() => cambiarFormularioEnviado(false), 5000);
                      }
                    } catch (err) {
                      console.log(err);
                    }
                  };
                  addOrder();
                }}>
                {({ errors }) => (
                  <Form className="form">
                    <h2>Personal Information</h2>
                    <div>
                      <label htmlFor="fname">First Name</label>
                      <Field type="text" id="fname" name="fname" placeholder="John" />
                      <ErrorMessage
                        name="fname"
                        component={() => <div className="error">{errors.fname}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="lname">Last Name</label>
                      <Field type="text" id="lname" name="lname" placeholder="Williams" />
                      <ErrorMessage
                        name="lname"
                        component={() => <div className="error">{errors.lname}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <Field type="text" id="email" name="email" placeholder="email@email.com" />
                      <ErrorMessage
                        name="email"
                        component={() => <div className="error">{errors.email}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="email2">Repeat email</label>
                      <Field type="text" id="email2" name="email2" placeholder="email@email.com" />
                      <ErrorMessage
                        name="email2"
                        component={() => <div className="error">{errors.email2}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="tel">Telephone</label>
                      <Field type="tel" id="tel" name="tel" placeholder="123456789" />
                      <ErrorMessage
                        name="tel"
                        component={() => <div className="error">{errors.tel}</div>}
                      />
                    </div>

                    <h2>Payment Information</h2>
                    <div>
                      <label htmlFor="cardNumber">Card number</label>
                      <Field type="text" id="cardNumber" name="cardNumber" />
                      <ErrorMessage
                        name="cardNumber"
                        component={() => <div className="error">{errors.cardNumber}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv">CVV</label>
                      <Field type="text" id="cvv" name="cvv" maxLength={4} />
                      <ErrorMessage
                        name="cvv"
                        component={() => <div className="error">{errors.cvv}</div>}
                      />
                    </div>
                    <div>
                      <label htmlFor="espDate">Expiration date</label>
                      <Field
                        type="text"
                        id="espDate"
                        name="espDate"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                      <ErrorMessage
                        name="espDate"
                        component={() => <div className="error">{errors.espDate}</div>}
                      />
                    </div>
                    <footer className="form-buttons">
                      {current === 0 ? (
                        <Link to="/">
                          <Button>Back</Button>
                        </Link>
                      ) : (
                        <Button onClick={() => prev()}>Back</Button>
                      )}
                      <button type="submit">Continue</button>
                    </footer>

                    {formularioEnviado && <p className="success">Form sent successfully!</p>}
                  </Form>
                )}
              </Formik>
            </>
          )
        );
      //"confirmation" step
      case 4:
        return (
          <>
            {!formularioEnviado ? (
              <OrderSummary order={order} />
            ) : (
              <div className="loading">
                <LoadingOutlined style={{ fontSize: '20px' }} />
                <h2>LOADING...</h2>
              </div>
            )}
          </>
        );
      default:
        return '';
    }
  }

  return (
    //steps
    <div>
      <Steps labelPlacement="vertical" responsive className="steps" current={current}>
        <Step initial title="Organize your visit" icon={<ScheduleOutlined />} />
        <Step title="Date" icon={<CarryOutOutlined />} />
        <Step title="Extras" icon={<PlusCircleOutlined />} />
        <Step title="Payment" icon={<DollarCircleOutlined />} />
        <Step title="Confirmation" icon={<SmileOutlined />} />
      </Steps>
      <div className="cartContainer">
        {conditionalRender()}

        {!cart[0] && current != 4 && (
          <div className="emptyCart">
            <p>There are no items in the cart</p>
            <Link to="/">
              <Button>Go to buy</Button>
            </Link>
          </div>
        )}
      </div>
      {cart[0] && <div className="debugger"></div>}
      {
        //Changinig the button action according to current state
        current !== 4 && cart[0] && (
          <>
            {current !== 3 && (
              <footer className="cart-footer">
                {current === 0 ? (
                  <Link to="/">
                    <Button>Back</Button>
                  </Link>
                ) : (
                  <Button onClick={() => prev()}>Back</Button>
                )}
                <Button
                  type="primary"
                  onClick={() => {
                    next();
                    current === 2 &&
                      extras[0] &&
                      message.success(
                        `You added ${extras.length} extras for your visit. $${totalExtras.toFixed(
                          2
                        )} was added to your order`
                      );
                  }}>
                  Continue
                </Button>
              </footer>
            )}
          </>
        )
      }
      )
    </div>
  );
}

export default Cart;
