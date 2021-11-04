import React from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../Components/ItemDetail';
import Date from '../Components/Date';
import { Steps } from 'antd';
import { ScheduleOutlined, PlusCircleOutlined,CarryOutOutlined, LoadingOutlined, SmileOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import './itemDetailContainer.css'

function ItemDetailContainer() {
    const [infoItem, setinfoItem] = React.useState('')
    const [loader, setLoader] = React.useState(true);
    const {id} = useParams()
    const { Step } = Steps;
    const [current, setCurrent] = React.useState(0);
    const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };

    

      
    React.useEffect(() => {
        setLoader(true);
        let promise = new Promise((resolve,reject) => {
            const infoItems = [
                {title:'Come with the people you love!', id:'1', benefits:['Five hours of fun', 'Bathroom access', 'Lazy river, our 3 best slides, wave pool, and more!'],description:'One visit in select dates with half access to Siami WaterPark. You will have access to the most liked attractions in the park for a reduced time but for a low price. This ticket includes', price:"15,99$ per person", pictureUrl:"../../../Half-pass-family.jpg"},
                {title:'Enjoy the weekend with your family and us!', id:'2', category:'tickets', description:'You will have access to an incredible resort with catering service for the complete weekend, and you could enjoy the whole park. This is a family pack for up to 4 people that includes: ',benefits:['All meals', 'Four stars hotel with views of the entire park', 'Access to the park at all times'], price:"$70,99 | all included", pictureUrl:'../../../fullPass-weekend.jpg'}, 
                {title:'Your children will love our attractions!', category:'parties', id:'3', description:'Slides, rivers and swimming pools, your children will not get bored at any time. If your child is less than 140 cm, this ticket is for him!', benefits:['Full acces', 'All day', 'Playgroud zone'],price:"$10,99", pictureUrl:'../../../childrenPass.jpg'},
                {title:'Take advantage of your special day and come and enjoy with us', category:'events', id:'4', description:'Validate your birthday date and get an 80% discount for the full pass to Siami Waterpark. By presenting a document that validates your birthday, you can get a great discount on our full pass and enjoy exclusive benefits', benefits: ['Full pass', 'Lunch included', 'Surprice gift', 'Free parking'],price:"$3,99", pictureUrl:'../../../BirthdayPass.jpg'} 
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

    function conditionalRender() {
        switch (current) {
            case 0:
              return (infoItem?<ItemDetail list={infoItem.result.find(elem => elem.id===id)}></ItemDetail>:console.log('error')) 

            case 1:
              return (<Date></Date>);

            case 2:
            case 3:
            case 4:
              return('Proximamente');
        }
    }
    return (
        <>

            <Steps  className='steps'current={current}>
    <Step initial  title="Organiza tu visita" icon={<ScheduleOutlined />} />
    <Step  title="Fecha"  icon={<CarryOutOutlined />}/>
    <Step  title="Extras" icon={<PlusCircleOutlined />} />
    <Step  title="Payment" icon={<DollarCircleOutlined />} />
    <Step  title="Confirmacion" icon={<SmileOutlined />} />
  </Steps>
  {loader ? (<div className='loading'><LoadingOutlined style={{fontSize: '20px'}}/><h2>CARGANDO...</h2></div>
  ) :
conditionalRender()}


            
            <footer className='footer'>
                {current === 0 ? <Link to='/'><Button>Back</Button></Link> : <Button onClick={() => prev()}>Back</Button>}
                <Button type="primary" onClick={() => next()}>Continue</Button>
            </footer>
        </>
    )
}

export default ItemDetailContainer
