import React from 'react';
import ItemListContainer from '../Container/ItemListContainer/ItemListContainer';
import Header from '../Components/Header/Header';
import Info from '../Components/Discover Section/Info';
import './home.css';
import Gallery from '../Components/Gallery/Gallery';

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <Info></Info>
      <Gallery></Gallery>
      <h2 className="title">━━ㅤOur Best Offersㅤ━━</h2>
      <ItemListContainer />
    </div>
  );
};

export default Home;
