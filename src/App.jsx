import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/Root'
import Landing from './components/Landing'
import Login from './pages/Login'
import ReportLayout from './pages/Report'
import Dashboard from './components/Dashboard'
import Cases from './components/Cases'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "report",
    element: <ReportLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>
      },
      {
        path: 'cases',
        element: <Cases/>
      }
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
