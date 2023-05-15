import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetail/ProductDetails.jsx'
import OrderReview from './components/OrderReview/OrderReview.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/review' element={<OrderReview/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
