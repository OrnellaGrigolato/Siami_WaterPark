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
            return (cart.map((elem)=><div className='cartListProduct'><h1>{elem.item.title}</h1><p>X{elem.quantity}</p><Button type="primary" onClick={() => removeItem(elem.item.numId)}>Borrar</Button></div>))

            case 1:
              return (<Date></Date>);

            case 2:
            case 3:
            case 4:
              return('Proximamente');
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
            {conditionalRender()}
            {cart[0]?<Button type="primary" onClick={() => clear()}>Borrar todo</Button>: ''}
            <footer className='footer'>
                {current === 0 ? <Link to='/'><Button>Back</Button></Link> : <Button onClick={() => prev()}>Back</Button>}
                <Button type="primary" onClick={() => next()}>Continue</Button>
            </footer>
        </div>
    )
}

export default Cart
