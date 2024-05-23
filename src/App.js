import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Technical from './components/technical';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Routes>
          <Route exact path ="/" Component={Technical}/>
          <Route exact path ="/technical" Component={Technical}/>
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
