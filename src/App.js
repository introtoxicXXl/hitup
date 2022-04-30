import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import SignIn from './components/SignIn/SignIn'
import Footer from './components/Footer/Footer';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <RequireAuth>
          <Route path='/about' element={<About/>}></Route>
        </RequireAuth>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
