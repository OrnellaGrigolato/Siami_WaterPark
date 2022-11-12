import React, { useEffect, useState } from 'react';

//components
import './ItemListContainer.css';
import ItemList from '../../Components/ItemList/ItemList';
import Footer from '../../Components/Footer/Footer';

//database
import { db } from '../../Firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { useParams } from 'react-router';
import { LoadingOutlined } from '@ant-design/icons';
// import facebook from '../assets/images/icon-facebook.svg';

const ItemListContainer = () => {
  const [items, setItems] = useState('');
  const [loader, setLoader] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);
    let productsDB = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');
    getDocs(productsDB)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data() };
        });
        setItems(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoader(false));
  }, [categoryId]);

  return loader ? (
    <div className="loading">
      <LoadingOutlined style={{ fontSize: '20px' }} />
      <h2>LOADING...</h2>
    </div>
  ) : (
    <>
      <div className="ItemListContainer">{items && <ItemList list={items}></ItemList>}</div>
      <Footer img={'./assets/images/icon-facebook.svg'}></Footer>
    </>
  );
};

export default ItemListContainer;
