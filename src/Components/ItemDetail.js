import React from 'react'
import './itemDetail.css'



function ItemDetail(info) {
    
    
    
    return (
        <section className='itemDetail'>
            
           <h1 className='itemTitle'> {info.list.title}</h1>
           <div className="itemFlexContainer">
                <img className='itemImg' src={info.list.pictureUrl} alt={info.list.title} />
                <div>
                    <p className='itemDescription'>{info.list.description}</p>
                    <ul className='itemBenefits'> {info.list.benefits.map(elem=>(<li>{elem}</li>))}</ul>
                    <br />
                    <p className='itemPrice'>Price<span>{info.list.price}</span></p>  
                </div>
           </div>
            

            

        </section>
    )
}

export default ItemDetail
