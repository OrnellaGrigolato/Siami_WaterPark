import './App.css';
import React from 'react';
import Home from './Pages/Home.js';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
import { ContextFunction } from './Context/CartContext';
import Cart from './Components/Cart/Cart';

function App() {
  React.useEffect(() => {
    document.title = 'Siami WaterPark';
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <ContextFunction>
          <Navbar />
          <Switch>
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/category/:categoryId" component={ItemListContainer} />
            <Route exact path="/" component={Home} />
            <Route exact path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </ContextFunction>
      </BrowserRouter>
    </div>
  );
}

export default App;
