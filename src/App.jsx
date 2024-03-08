import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/Root'
import Landing from './components/Landing'
import Login from './pages/Login'
import ReportLayout from './pages/Report'
import Dashboard from './components/Dashboard'
import Cases from './components/Cases'
import Register from './pages/Register'
import { createTheme, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Setting from './components/Setting'
import UserProfile from './components/UserProfile'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'

const theme = createTheme({
  palette: {
    primary: {
      main: "#502cb7",
    },
    secondary: {
      main: "#2c42b7",
    },
  },
});


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
        element :<Dashboard/>
        
      },
      {
        path: 'cases',
        element: <Cases/>
      },
      {
        path: 'services',
        element: <Services/>,
        children:[
          {
            path: 'report/services/:id',
            element: <ServiceDetails />
          },
        ],
      },
      {
        path: 'setting',
        element: <Setting />,
        children: [
          {
            path : 'userprofile',
            element: <UserProfile />
          }
        ]
      }
    ],
  },
]);

function App() {

  return (
    <Provider store={store}>

    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
    </Provider>
  );
}

export default App
