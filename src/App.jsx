import {  RouterProvider } from 'react-router-dom'
import './App.css'
import router from './theme/router'
import { createTheme, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store/store'



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
