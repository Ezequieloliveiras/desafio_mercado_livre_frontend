import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// import {
//   BrowserRouter,
//   RouterProvider,
// } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import ProductDetail from './pages/ProductDetail'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />
//   },
//   {
//     path: "/product/:id",
//     element: <ProductDetail />
//   },
// ])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


