import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
import ItemList from '../Components/ItemList'
import { useParams } from 'react-router'
import {LoadingOutlined} from '@ant-design/icons'


const ItemListContainer = (props) => {

    const [items, setItems] = useState('')
    const [loader, setLoader] = useState(true);
  const {categoryId} = useParams()
    useEffect(() => {
      setLoader(true);
        let promise = new Promise((resolve,reject) => {

            const products = [
                {title:'Come with the people you love!', category:'tickets',id:'1', description:'One visit in select dates with half access to Siami WaterPark', price:"15,99$ per person", pictureUrl:"../../../Half-pass-family.jpg"}, 
                {title:'Enjoy the weekend with us!', id:'2', category:'tickets', description:'You will have access to an incredible resort with catering service for the complete weekend, and you could enjoy the whole park', price:"$70,99; all included", pictureUrl:'../../../fullPass-weekend.jpg'}, 
                {title:'Your children will love our attractions!', category:'parties', id:'3', description:'Slides, rivers and swimming pools, your children will not get bored at any time', price:"$10,99", pictureUrl:'../../../childrenPass.jpg'},
                {title:'Take advantage of your special day and come and enjoy with us', category:'events', id:'4', description:'Validate your birthday date and get an 80% discount for the full pass to Siami Waterpark', price:"$3,99", pictureUrl:'../../../BirthdayPass.jpg'}
            ];
            if (!products) {
              reject({err: 'no hay productos para mostrar'})
            }else {
              resolve(products)}});


            
          const timer = setTimeout(() => {
            promise.then((result) => {
                categoryId
          ? setItems(result.filter((i) => i.category === categoryId))
          : setItems(result);
              }).catch((err) => {
                console.log(err)
              }).finally(() => setLoader(false));
          }, 2000);
          return () => clearTimeout(timer);
    }, [categoryId])
    return loader ? (<div className='loading'><LoadingOutlined style={{fontSize: '20px'}}/><h2>CARGANDO...</h2></div>

    ) : (
        <div className='ItemListContainer'>
            {items? (<ItemList list={items}></ItemList>) : console.log('error')}
        </div>
    )
}

export default ItemListContainer;
