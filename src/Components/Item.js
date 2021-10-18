import React from 'react'
import './item.css'

function Item(props) {
    return (
        <a href='#' className="card">
            <img src={props.pictureUrl} alt="" />
            <p className='title'>{props.title}</p>
            <p className='description'>{props.description}</p>
            <p className="price">{props.price}</p>
            <button className="btn-info">More info</button>
        </a>
    )
}

export default Item
