import React, { useState } from 'react';
import { Button, message } from 'antd';
import './itemCount.css';

const ItemCount = (props) => {
  const [stock, setStock] = useState(props.stock);
  const [unidades, setUnidades] = useState(1);

  const sumaStock = () => {
    if (stock === 0) {
      message.error('No more stock');
    } else {
      setUnidades(unidades + 1);
      setStock(stock - 1);
    }
  };

  const restaStock = () => {
    if (unidades === 1) {
      message.error('You cannot select less than 1');
    } else {
      setUnidades(unidades - 1);
      setStock(stock + 1);
    }
  };

  return (
    <div className="ItemCount">
      <div>
        <div className="counter">
          <Button type="default" onClick={restaStock}>
            -
          </Button>
          <p>{unidades}</p>
          <Button type="default" onClick={sumaStock}>
            +
          </Button>
        </div>
        <div>
          <p className="stock">Stock disponible {stock}</p>
        </div>
      </div>
      <div>
        <Button type="primary" onClick={() => props.onAdd({ unidades })}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
