import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/Root'
import Landing from './components/Landing'
import Login from './pages/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index:true,
        element: <Landing />
      },
      
    ]
  },
  {
    path: 'login',
    element: <Login/>
  }
])

function App() {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
