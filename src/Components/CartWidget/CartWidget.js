import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from '../../Context/CartContext';
import './cartWidget.css';

export const CartWidget = () => {
  const { cart } = React.useContext(CartContext);
  return (
    <div>
      <ShoppingCartOutlined style={{ fontSize: '30px' }} />
      {cart[0] && (
        <div className="numContainer">
          <div className="circle">
            <p className="number">{cart.reduce((acc, current) => acc + current.quantity, 0)}</p>
          </div>
        </div>
      )}
    </div>
  );
};
