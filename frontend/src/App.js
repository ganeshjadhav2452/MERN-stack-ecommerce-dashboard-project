import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Products from './components/pages/products/Products';
import Footer from './components/Footer';
import SignUp from './components/authantication/SignUp';
import PrivateComponent from './components/PrivateComponent';
function App() {
  return (
    <div className="App">

      <Nav/>
    

      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route exact path='/' element={<Products/>}  />
        <Route exact  path='/update' element={SignUp}  />
        <Route exact  path='/add' element={SignUp}  />
        <Route exact  path='/profile' element={SignUp}  />
        <Route  exact path='/logout' element={Products}  />
        </Route>
       
        <Route exact  path='/signup' element={<SignUp/>}  />
      </Routes>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
