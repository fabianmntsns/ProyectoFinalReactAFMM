
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/cart';



function App() {

  return (
 <div className='App'>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Todos los productos'}/>}/>
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting={'Productos Filtrados'}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>

  </div> 

  )
}

export default App
