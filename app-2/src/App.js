import Search from './components/Search';
import Products from './components/Products';
import Product from './components/Product';
import {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';



function App() {

  const [searchArray, setSearchArray] = useState([]);

  return (
    <div className="App">
      <Search setSearchArray={setSearchArray} searchArray={searchArray} />
      <Switch>
        {/* <Products searchArray={searchArray} /> */}
        <Route path='/products' render={(props) => (<Products {...props} searchArray={searchArray} />)} />
        <Route path='/product/:id' render={(props) => (<Product {...props} searchArray={searchArray} />)} />
      </Switch>
    </div>
  );
}

export default App;
