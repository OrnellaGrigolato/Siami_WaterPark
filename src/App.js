

import './App.css';
import Home from './Pages/Home.js';
import 'antd/dist/antd.css';
import{BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import ItemDetailContainer from './Container/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/item/:id' component={ItemDetailContainer} />
          <Route exact path='/about'><h1>Proximamente seccion about</h1></Route>
          <Route exact path='/category/:categoryId' component={ItemListContainer}/>
          <Route exact path='/' component={Home}/>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
