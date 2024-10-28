import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller from './Pages/Seller/Seller';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Seller" element={<Seller />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
