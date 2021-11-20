import React from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../Components/ItemDetail';
import {LoadingOutlined } from '@ant-design/icons';
import './itemDetailContainer.css'
import db from '../Firebase/firebaseConfig';

import { doc, getDoc} from 'firebase/firestore';


function ItemDetailContainer() {
    const [infoItem, setinfoItem] = React.useState('')
    const [loader, setLoader] = React.useState(true);
    const {id} = useParams()
   
    

      
    React.useEffect(() => {
        setLoader(true);
        const item = doc(db, 'products', id);
        getDoc(item)
          .then((res) => {
            const result = {...res.data() };
            setinfoItem(result);
          }).catch((err) => {
            console.log(err)
          }).finally(() => setLoader(false))
    }, [])

 
    return (
        <>

  {loader ? (<div className='loading'><LoadingOutlined style={{fontSize: '20px'}}/><h2>LOADING...</h2></div>
  ) :
  infoItem?<ItemDetail list={infoItem}></ItemDetail>:console.log('error')}


            
        </>
    )
}

export default ItemDetailContainer
