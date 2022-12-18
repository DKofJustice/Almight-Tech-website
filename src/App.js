import './Styles/Index/App.css';
import Homepage from './Pages/Homepage/Homepage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import UpArrow from './Assets/expand_less_FILL0_wght400_GRAD0_opsz48.svg';

function App() {

  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Header/>
      <button className='back-to-top' onClick={() => scrollTop()}><img src={UpArrow} alt='up-arrow'/></button>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;