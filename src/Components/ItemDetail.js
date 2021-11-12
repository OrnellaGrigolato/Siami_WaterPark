import React from 'react'
import './itemDetail.css'
import {CartContext} from "../Context/CartContext";
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';



function ItemDetail(info) {
    const {addItem} = React.useContext(CartContext)
    const [buy, setBuy] = React.useState(false)



    const onAdd = (props)=>{
        setBuy(true)
        addItem(info, props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)

    }
    
    
    return (
        <section className='itemDetail'>
            
           <h1 className='itemTitle'> {info.list.title}</h1>
           <div className="itemFlexContainer">
                <img className='itemImg' src={info.list.pictureUrl} alt={info.list.title} />
                <div>
                    <p className='itemDescription'>{info.list.description}</p>
                    <ul className='itemBenefits'> {info.list.benefits.map(elem=>(<li>{elem}</li>))}</ul>
                    <br />
                    {!buy ? <ItemCount stock={info.list.stock} onAdd={onAdd}/> : <Link to='/cart'><button>Terminar compra</button></Link>}
                    <p className='itemPrice'>Price<span>{info.list.price}</span></p>  
                </div>
           </div>
            

            

        </section>
    )
}

export default ItemDetail
