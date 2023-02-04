import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
      <div className="home-content">
        <div id="home-text">
          Bem-Vindo! Navega através dos botões abaixo ou pelo menu superior.
        </div><br></br>
        <Link to="/"><button className='home-item'>Home</button></Link>
        <Link to="/Sobre"><button className='home-item'>Sobre</button></Link>
        <Link to="/Quotes"><button className='home-item'>Quotes</button></Link>
        <Link to="/Movies"><button className='home-item'>Movies</button></Link>

      </div>
    );
  }
  
  export default Home;