import React from 'react'
import './ItemListContainer.css'


const ItemListContainer = (props) => {
    return (
        <div className='ItemListContainer'>
            <p>Hello {props.greeting}</p>
        </div>
    )
}

export default ItemListContainer;
