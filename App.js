
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Couple/Header/Header';
import Footer from './Components/Couple/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path= '/' element={<Home />} />

      </Routes>
      <Footer />
    
    </>

  );
}

export default App;
