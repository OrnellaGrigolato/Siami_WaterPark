import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './orderSummary.css';
import { Link } from 'react-router-dom';

function OrderSummary(order) {
  return (
    <div className="summaryContainer">
      <CheckCircleOutlined style={{ color: '#14c714', fontSize: '7rem' }} />
      <h1>Your purchase is doing!</h1>
      <p>
        {order.order.buyer.fname}, you made a purchase in Siami Waterpark worth $
        {order.order.total.toFixed(2)}
      </p>
      {order.order.date ? <p>We are waiting for you on {order.order.date}</p> : ''}
      <p>We will send you an email with important information for your visit</p>
      <p>Your order ID is {order.order.id}</p>
      <Link to="/">
        <Button type="primary">Go to home</Button>
      </Link>
    </div>
  );
}

export default OrderSummary;
