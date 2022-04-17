import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

//context api
export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({
    name: null,
    email: null, 
    photoURL: null,
    isSignedIn: false
    });
  const [orders,setOrders] = useState({})



  return(
    <UserContext.Provider value={{ loginState: [loggedInUser, setLoggedInUser], orderState : [orders, setOrders]}}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="productlist" element={<ProductList/>} />
        <Route path="product" element={<Product />} />
      </Routes>      
    </UserContext.Provider>

  ); 
};

export default App;