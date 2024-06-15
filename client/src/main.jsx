import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from "@mui/material" //to get basic codelines of css e.g margin 0 ,padding 0 etc etc
import {HelmetProvider} from "react-helmet-async" // react helmet provides the feature to use multiple meta tag in one application in short we can have have multiple titles 


ReactDOM.createRoot(document.getElementById('root')).render(
   //some times components or functions execute twice ...many times we see in console .....this is due to strict mode
  <React.StrictMode>
  <HelmetProvider>
  <CssBaseline/>
    <div onContextMenu={(e)=>e.preventDefault()} >
    <App />
    </div>
  </HelmetProvider>
  </React.StrictMode>
)
