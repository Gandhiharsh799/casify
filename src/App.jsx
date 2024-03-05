import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/Root'
import Landing from './components/Landing'
import Login from './pages/Login'
import ReportLayout from './pages/Report'
import Dashboard from './components/Dashboard'
import Cases from './components/Cases'
import Register from './pages/Register'
import { createMuiTheme, ThemeProvider } from '@mui/material'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#502cb7'
    }
  }
})


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
    path: 'signup',
    element: <Register/>
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App
