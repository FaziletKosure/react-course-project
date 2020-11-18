
import './App.css';
import Navbar from './compnents/Navbar'
import Footer from './compnents/Footer'
import Home from './compnents/pages/Home'
import Services from './compnents/pages/Services';
import Products from './compnents/pages/Products';
import SignUp from './compnents/pages/SignUp';
import {BrowserRouter as  Router,Switch,Route,} from "react-router-dom"

function App() {
  return (
    <> 
 <Router>
 <Navbar/>
   <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/services' component={Services} />
     <Route path='/products' component={Products} />
      <Route path='/sign-up' component={SignUp} />
   </Switch>
  
 </Router>
    </>
  );
}

export default App;
