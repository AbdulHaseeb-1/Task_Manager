import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import {ChakraProvider} from "@chakra-ui/react"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>,
)