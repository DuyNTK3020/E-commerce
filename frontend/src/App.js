import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignUp } from './Pages/LoginSignUp';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<Product />}>
          <Route path=':productID' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
