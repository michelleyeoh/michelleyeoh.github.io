import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Technical from './components/technical';
import Design from './components/design';

function App() {
  return (
    <div className='App'>
      <Header/>
        <Routes>
          <Route path ="/" Component={Technical}/>
          <Route path ="/technical" Component={Technical}/>
          <Route path ="/design" Component={Design}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
