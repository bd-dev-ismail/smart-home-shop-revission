import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import About from '../components/About';
import getCartAndProduct from "../loader/getCartAndProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    loader: getCartAndProduct,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/cart", element: <Cart></Cart> },
      { path: "/about", element: <About></About> },
    ],
  },
]);

export default router ;