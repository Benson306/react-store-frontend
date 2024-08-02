import { Route, Routes } from "react-router-dom";
import CancelTransaction from "./components/client/CancelTransaction";
import Cart from "./components/client/Cart";
import Checkout from "./components/client/Checkout";
import ConfirmPayment from "./components/client/ConfirmPayment";
import HeaderBar from "./components/client/HeaderBar";
import Navigation from "./components/client/Navigation";
import Preview from "./components/client/Preview";
import { CartProvider } from "./utils/CartContext";
import { useEffect, useState } from 'react';


function App() {  
  const [showNav, setShowNav] = useState(false);
  const [navClass, setNavClass] = useState('hidden');

  useEffect(() => {
    if (showNav) setNavClass('block'); 
    else setNavClass('hidden');
  }, [showNav]);
  
  return (
    
    <div className="App">
    <CartProvider>
      <HeaderBar showNav={showNav} setShowNav={setShowNav} />
      <Routes>
        <Route path="/" element={<Navigation navClass={navClass} setShowNav={setShowNav} />} />
        <Route path="/preview" element={<Preview />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cancel" element={<CancelTransaction /> } />
        <Route path="/confirm" element={ <ConfirmPayment /> } />
      </Routes>
    </CartProvider>
    </div>
    );
}

export default App;
