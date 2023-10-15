import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import App from './App.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'
import './base.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/index.esm'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/home', element: <Home /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)