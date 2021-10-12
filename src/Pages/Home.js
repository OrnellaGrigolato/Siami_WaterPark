import React from 'react'
import Navbar from '../Components/Navbar';
import ItemListContainer from '../Container/ItemListContainer';

const Home = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting={'Coder!'}/>
        </>
    )
}

export default Home;
