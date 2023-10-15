import './base.css'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/index.esm'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './routes/ErrorPage.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Login from './routes/Login'
import EditProduct from './routes/EditProduct'
import Products from './routes/Products'
import CreateProduct from './routes/CreateProduct'
import DeleteProduct from './routes/DeleteProduct'
import Orders from './routes/Orders'
import CreateOrder from './routes/CreateOrder'
import EditOrder from './routes/EditOrder'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/auth', element: <Login /> },
      { path: '/about', element: <About /> },
      { path: '/products', element: <Products /> },
      { path: '/products/new', element: <CreateProduct /> },
      { path: '/products/update/:id', element: <EditProduct /> },
      { path: '/products/delete/:id', element: <DeleteProduct /> },
      { path: '/orders', element: <Orders /> },
      { path: '/orders/new', element: <CreateOrder /> },
      { path: '/orders/update/:id', element: <EditOrder /> }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)