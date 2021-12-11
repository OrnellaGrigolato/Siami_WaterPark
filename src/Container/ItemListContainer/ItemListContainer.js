import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router';
import { LoadingOutlined } from '@ant-design/icons';
import { db } from '../../Firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

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
    <div className="ItemListContainer">{items && <ItemList list={items}></ItemList>}</div>
  );
};

export default ItemListContainer;
