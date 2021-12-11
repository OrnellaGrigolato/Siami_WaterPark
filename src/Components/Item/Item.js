import React from 'react';
import './item.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Item(props) {
  return (
    <motion.a href="#" className="card" whileHover={{ scale: 1.06 }}>
      <Link to={`/item/${props.id}`}>
        {' '}
        <img src={props.pictureUrl} alt={props.title + ' image'} />
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <p className="price">{props.price}</p>
        <Button className="btn-info"> More info </Button>
      </Link>
    </motion.a>
  );
}

export default Item;
