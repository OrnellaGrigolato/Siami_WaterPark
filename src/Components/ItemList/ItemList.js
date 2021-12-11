import React from 'react';
import Item from '../Item/Item';
import './itemList.css';

function ItemList(props) {
  return (
    <div className="container">
      {props.list.map((elem) => (
        <Item
          title={elem.title}
          id={elem.id}
          key={elem.id}
          description={elem.description}
          price={elem.price}
          pictureUrl={elem.pictureUrl}></Item>
      ))}
    </div>
  );
}

export default ItemList;
