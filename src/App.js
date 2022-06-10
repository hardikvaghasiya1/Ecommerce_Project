import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import Shop from './Container/Shop/Shop';
import { Route } from 'react-router-dom';
import Blog from './Container/Blog/Blog';
import Contact from './Container/Contact/Contact';
import Cart from './Container/Cart/Cart';
import Checkout from './Container/Checkkout/Checkout';

function App() {
  return (
    <>
      <Header/>
      <switch>
       <Route exact path={"/"} component={Home}/>
       <Route exact path={"/shop"} component={Shop}/>
       <Route exact path={"/blog"} component={Blog}/>
       <Route exact path={"/contact"} component={Contact}/>
       <Route exact path={"/cart"} component={Cart}/>
       <Route exact path={"/checkout"} component={Checkout}/>
      </switch>
      <Footer/>
   </>
  );
}

export default App;
