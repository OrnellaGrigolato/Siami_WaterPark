import React from 'react'
import './item.css'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

function Item(props) {
    return (
        <motion.a href='#' className="card"
        whileHover={{scale: 1.06}}
        >
           <Link to={`/item/${props.id}`}> <img src={props.pictureUrl} alt="" />
            <p className='title'>{props.title}</p>
            <p className='description'>{props.description}</p>
            <p className="price">{props.price}</p>
            <button className="btn-info">More info</button>
        </Link>
        </motion.a>
    )
}

export default Item
