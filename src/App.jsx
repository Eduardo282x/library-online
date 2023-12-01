
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import { ProtectedRouter } from './components/ProtectedRouter/ProtectedRouter';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import { Users } from './components/Users/Users';
import { Books } from './components/Books/Books';
import { Reserve } from './components/Reserve/Reserve';
import { Thesis } from './components/Thesis/Thesis';
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
          path: "/thesis",
          element: <Thesis/>
        },
        {
          path: "/users",
          element: <Users/>
        },
        {
          path: "*",
          element: <Home/>
        },
      ]
    }
  ]);

  return (
    <div className="appBack">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
