import React from 'react'
import {CartContext} from "../Context/CartContext";
import { Steps } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import Date from '../Components/Date';
import './cart.css'
import { ScheduleOutlined, PlusCircleOutlined,CarryOutOutlined, SmileOutlined, DollarCircleOutlined } from '@ant-design/icons';

function Cart() {
    const {cart, removeItem, clear} = React.useContext(CartContext)
    const { Step } = Steps;
    const [current, setCurrent] = React.useState(0);
    const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };

      function conditionalRender() {
        switch (current) {
            case 0:
            return (<section>
              {cart[0]?<h2>Items in cart</h2>:''}
              {cart.map((elem)=>
            <div className='cartListProduct'>
              
              <div className="flexCartConteiner">
                <img alt='product image'src={elem.item.pictureUrl}/>
                <div>
                  <h3>{elem.item.title}</h3>
                  <p>{elem.item.description}</p>
                </div>
                <div className='quantityAndDelete'>
                  <p>{elem.item.value}   X   {elem.quantity}</p>
                  <Button type="primary" onClick={() => removeItem(elem.item.id)}>Borrar</Button>
                </div>
              </div>
              
              <hr></hr>
            </div>)}
            </section>)

            case 1:
              return  (cart[0]
                ? (<Date></Date>)
                : '');

            case 2:
            case 3:
            case 4:
              return(cart[0]
                ? ('Proximamente')
                : '');
            default:
              console.log('default')
        }
    }

    return (
        
        <div>
              <Steps  className='steps'current={current}>
                <Step initial  title="Organiza tu visita" icon={<ScheduleOutlined />} />
                <Step  title="Fecha"  icon={<CarryOutOutlined />}/>
                <Step  title="Extras" icon={<PlusCircleOutlined />} />
                <Step  title="Payment" icon={<DollarCircleOutlined />} />
                <Step  title="Confirmacion" icon={<SmileOutlined />} />
              </Steps>
              <div className="cartContainer">
                {conditionalRender()}

              
                {cart[0]
                ?<div> {current===0? <div><p>Total: {cart.reduce((acc, current)=>acc + current.item.value * current.quantity, 0)}</p><Button type="primary" onClick={() => clear()}>Borrar todo</Button></div>:''}</div>
                : <div className='emptyCart'><p>There are no items in the cart</p><Link to='/'><Button>Go to buy</Button></Link></div>}
              </div>
              {cart[0]?<div className='debugger'></div>:''}
            <footer className='footer'>
                {current === 0 ? <Link to='/'><Button>Back</Button></Link> : <Button onClick={() => prev()}>Back</Button>}
                <Button type="primary" onClick={() => next()}>Continue</Button>
            </footer>
        </div>
    )
}

export default Cart
