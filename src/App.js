import { Route, Routes } from "react-router-dom";
import Cart from "./components/client/Cart";
import HeaderBar from "./components/client/HeaderBar";
import Navigation from "./components/client/Navigation";
import Preview from "./components/client/Preview";
import { CartProvider } from "./utils/CartContext";


function App() {
  
  return (
    
    <div className="App">
    <CartProvider>
      <HeaderBar />

      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/preview" element={<Preview />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
    </div>
    );
}

export default App;
