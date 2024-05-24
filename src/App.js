import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Technical from './components/technical';
import Design from './components/design';
import About from './components/about';

function App() {
  return (
    <div className='App'>
      <Header/>
        <Routes>
          <Route path ="/" element={<Technical/>}/>
          <Route path ="/technical" element={<Technical/>}/>
          <Route path ="/design" element={<Design/>}/>
          <Route path ="/about" element={<About/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
