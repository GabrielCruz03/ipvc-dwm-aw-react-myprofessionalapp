import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Quotes from './pages/Quotes/API_Quotes';
import Movies from './pages/Movies/API_Movies';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;