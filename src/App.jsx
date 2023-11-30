
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import { ProtectedRouter } from './components/ProtectedRouter/ProtectedRouter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Users } from './components/Users/Users';
import { Books } from './components/Books/Books';
import { Reserve } from './components/Reserve/Reserve';
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      element: <ProtectedRouter><Layout/></ProtectedRouter>,
      children: [
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/books",
          element: <Books/>
        },
        {
          path: "/reserve",
          element: <Reserve/>
        },
        {
          path: "/users",
          element: <Users/>
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
