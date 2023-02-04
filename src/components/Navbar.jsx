import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <Link to="/"><button className='nav-item'>Home</button></Link>
      <Link to="/Sobre"><button className='nav-item'>Sobre</button></Link>
      <Link to="/Quotes"><button className='nav-item'>Quotes</button></Link>
      <Link to="/Movies"><button className='nav-item'>Movies</button></Link>
    </nav>
  
      
  );
}

export default Navbar;