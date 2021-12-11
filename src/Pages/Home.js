import React from 'react';
import ItemListContainer from '../Container/ItemListContainer/ItemListContainer';
import Header from '../Components/Header/Header';
import './home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <h2 className="title">Our best offers</h2>
      <ItemListContainer />
    </div>
  );
};

export default Home;
