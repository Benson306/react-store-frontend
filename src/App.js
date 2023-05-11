import { Route, Routes } from "react-router-dom";
import HeaderBar from "./components/client/HeaderBar";
import Navigation from "./components/client/Navigation";
import Preview from "./components/client/Preview";


function App() {
  return (
    
    <div className="App">
      <HeaderBar />

      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/preview" element={<Preview />}/>
      </Routes>
    </div>
    );
}

export default App;
