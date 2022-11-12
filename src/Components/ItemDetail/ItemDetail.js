import React from 'react';
import './itemDetail.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import ItemCount from '../ItemCount/ItemCount';
import Footer from '../Footer/Footer';

function ItemDetail(info) {
  const { addItem } = React.useContext(CartContext);
  const [buy, setBuy] = React.useState(false);

  const onAdd = (props) => {
    setBuy(true);
    addItem(info, props.unidades);
    message.success(`You added ${props.unidades} tickets to the cart`);
  };

  return (
    <>
      <section className="itemDetail">
        <h1 className="itemTitle"> {info.list.title}</h1>
        <div className="itemFlexContainer">
          <img className="itemImg" src={info.list.pictureUrl} alt={info.list.title} />
          <div>
            <p className="itemDescription">{info.list.description}</p>
            <ul className="itemBenefits">
              {' '}
              {info.list.benefits.map((elem) => (
                <li key={elem.id}>{elem}</li>
              ))}
            </ul>
            <br />

            <p className="itemPrice">
              Price<span>{info.list.price}</span>
            </p>
            {!buy ? (
              <ItemCount stock={info.list.stock} onAdd={onAdd} />
            ) : (
              <div className="buttons">
                <Link to="/">
                  <Button type="default">Back to home</Button>
                </Link>
                <Link to="/cart">
                  <Button type="primary">Go to cart</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default ItemDetail;
