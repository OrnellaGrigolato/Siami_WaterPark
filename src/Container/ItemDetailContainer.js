import React from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../Components/ItemDetail';
import {LoadingOutlined } from '@ant-design/icons';
import './itemDetailContainer.css'

function ItemDetailContainer() {
    const [infoItem, setinfoItem] = React.useState('')
    const [loader, setLoader] = React.useState(true);
    const {id} = useParams()
   
    

      
    React.useEffect(() => {
        setLoader(true);
        let promise = new Promise((resolve,reject) => {
            const infoItems = [
                {title:'Come with the people you love!', stock: 6,id:'1', numId:1, benefits:['Five hours of fun', 'Bathroom access', 'Lazy river, our 3 best slides, wave pool, and more!'],description:'One visit in select dates with half access to Siami WaterPark. You will have access to the most liked attractions in the park for a reduced time but for a low price. This ticket includes', price:"15,99$ per person", pictureUrl:"../../../Half-pass-family.jpg"},
                {title:'Enjoy the weekend with your family and us!', stock: 1,id:'2',numId:2, category:'tickets', description:'You will have access to an incredible resort with catering service for the complete weekend, and you could enjoy the whole park. This is a family pack for up to 4 people that includes: ',benefits:['All meals', 'Four stars hotel with views of the entire park', 'Access to the park at all times'], price:"$70,99 | all included", pictureUrl:'../../../fullPass-weekend.jpg'}, 
                {title:'Your children will love our attractions!', stock: 5,category:'parties', id:'3', numId:3, description:'Slides, rivers and swimming pools, your children will not get bored at any time. If your child is less than 140 cm, this ticket is for him!', benefits:['Full acces', 'All day', 'Playgroud zone'],price:"$10,99", pictureUrl:'../../../childrenPass.jpg'},
                {title:'Take advantage of your special day and come and enjoy with us', stock: 3,category:'events', id:'4', numId:4, description:'Validate your birthday date and get an 80% discount for the full pass to Siami Waterpark. By presenting a document that validates your birthday, you can get a great discount on our full pass and enjoy exclusive benefits', benefits: ['Full pass', 'Lunch included', 'Surprice gift', 'Free parking'],price:"$3,99", pictureUrl:'../../../BirthdayPass.jpg'} 
                ];
            if (!infoItems) {
              reject({err: 'no hay productos para mostrar'})
            }else {
              resolve(infoItems)}});

          const timer = setTimeout(() => {
            promise.then((result) => {
                setinfoItem({result})
              }).catch((err) => {
                console.log(err)
              }).finally(() => setLoader(false));
          }, 2000);
          return () => clearTimeout(timer);
    }, [])

 
    return (
        <>

  {loader ? (<div className='loading'><LoadingOutlined style={{fontSize: '20px'}}/><h2>CARGANDO...</h2></div>
  ) :
  infoItem?<ItemDetail list={infoItem.result.find(elem => elem.id===id)}></ItemDetail>:console.log('error')}


            
        </>
    )
}

export default ItemDetailContainer
