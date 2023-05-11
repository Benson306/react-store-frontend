import { Route, Routes } from "react-router-dom";
import HeaderBar from "./components/client/HeaderBar";
import Navigation from "./components/client/Navigation";
import Preview from "./components/client/Preview";


function App() {
  const currentYear = new Date().getFullYear();
  return (
    
    <div className="App">
      <HeaderBar />

      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/preview" element={<Preview />}/>
      </Routes>

      <div className="bottom-0 text-center p-5">
      © {currentYear} Copyright Iko Nini
      </div>
    </div>
    );
}

export default App;
