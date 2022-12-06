import './Styles/Index/App.css';
import Homepage from './Pages/Homepage/Homepage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;