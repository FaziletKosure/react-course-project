import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductsDetails from './components/ProductsDetails';
import ProductsPage from './components/ProductsPage';
import Iphontwelve from './components/Iphontwelve';
import { productData, productDataTwo,productDataipad,productDataAll } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />   
      <Switch>
        <Route exact path='/mac' render={()=>(<Products heading='Choose your favorite' data={productData} />)}/>
        <Route exact path='/iphone12' render={()=>(<Products heading='Choose your favorite' data={productDataTwo} />)}/>
        <Route exact path='/ipad' render={()=>(<Products heading='Choose your favorite' data={productDataipad} />)}/>
        <Route exact path="/details/:id" render={()=>(<ProductsDetails heading='Take a Closer Look' data={productDataAll} />)}/>
        <Route exact path='/iphone' component={Iphontwelve}/>
        <Route exact path='/mciphn'  component={ProductsPage}/>
        <Route path='/' component={Hero}/> 
       
      </Switch>
    </Router>
  );
}

export default App;
