import React from 'react';
import './item.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Item(props) {
  return (
    <motion.a href="#" className="card">
      <Link to={`/item/${props.id}`} className="flex-card-container">
        {' '}
        <img src={props.pictureUrl} alt={props.title + ' image'} className="card-image" />
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <p className="price">{props.price}</p>
        <Button type="primary" className="btn-info">
          {' '}
          More info ➱
        </Button>
      </Link>
    </motion.a>
  );
}

export default Item;
