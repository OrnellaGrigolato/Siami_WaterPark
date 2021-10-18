import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
import ItemList from '../Components/ItemList'


const ItemListContainer = (props) => {

    const [items, setItems] = useState('')

    useEffect(() => {
        let promise = new Promise((resolve,reject) => {

            const products = [
                {title:'Come with the people you love!', id:1, description:'One visit in select dates with half access to Siami WaterPark', price:"15,99$ per person", pictureUrl:"../../../Half-pass-family.jpg"}, 
                {title:'Enjoy the weekend with us!', id:2, description:'You will have access to an incredible resort with catering service for the complete weekend, and you could enjoy the whole park', price:"$70,99; all included", pictureUrl:'../../../fullPass-weekend.jpg'}, 
                {title:'Your children will love our attractions!', id:3, description:'Slides, rivers and swimming pools, your children will not get bored at any time', price:"$10,99", pictureUrl:'../../../childrenPass.jpg'},
                {title:'Take advantage of your special day and come and enjoy with us', id:4, description:'Validate your birthday date and get an 80% discount for the full pass to Siami Waterpark', price:"$3,99", pictureUrl:'../../../BirthdayPass.jpg'}
            ];
            if (!products) {
              reject({err: 'no hay productos para mostrar'})
            }else {
              resolve(products)}});


            
          const timer = setTimeout(() => {
            promise.then((result) => {
                console.log('yo demoro')
                setItems({result})
              }).catch((err) => {
                console.log(err)
              });
          }, 2000);
          return () => clearTimeout(timer);
    }, [])
    return (
        <div className='ItemListContainer'>
            {items? (<ItemList list={items}></ItemList>) : console.log('f')}
        </div>
    )
}

export default ItemListContainer;
