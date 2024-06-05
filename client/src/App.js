import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import { Header, Cart, Category, Footer, Newsletter, Home, Products, Search, SingleProduct } from './components';


function App() {
  const Layout = () => {
    return(
      <div className='App'>
        <Header/>
          <Outlet />
        <Newsletter/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:id' element={<Category/>} />
        <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path='/products/:id' element={<Products/>} />
      </Route>
       
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
