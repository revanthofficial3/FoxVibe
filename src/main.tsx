import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Theme from './Components/AudioPlayer/Theme.tsx';
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
     <App songCount={undefined} />
   </ThemeProvider>
  </React.StrictMode>
)