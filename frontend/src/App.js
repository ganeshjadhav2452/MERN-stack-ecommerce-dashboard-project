import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Products from './components/pages/products/Products';
import Footer from './components/Footer';
import SignUp from './components/authantication/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/authantication/Login';
import AddProduct from './components/pages/AddProduct/AddProduct';
import UpdateProductComponent from './components/pages/products/UpdateProductComponent';
function App() {
  return (
    <div className="App">

      <Nav/>
    
      <div className="main-content" style={{marginBottom:'1rem'}} >
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route exact path='/' element={<Products/>}  />
        <Route exact  path='/update/:id' element={<UpdateProductComponent />}  />
        <Route exact  path='/add' element={<AddProduct/>}  />
        <Route exact  path='/profile' element={SignUp}  />
        <Route  exact path='/logout' element={Products}  />
        </Route>
       
        <Route exact  path='/signup' element={<SignUp/>}  />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      </div>
    <Footer />
    </div>
  );
}

export default App;
