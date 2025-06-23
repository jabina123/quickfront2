// App.js
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import './darkMode.css' // ⬅️ import

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ProfilePage from './Pages/ProfilePage'
import ShippingPage from './Pages/ShippingPage'
import PaymentPage from './Pages/PaymentPage'
import PlaceOrderPage from './Pages/PlaceOrderPage'
import OrderPage from './Pages/OrderPage'
import UserListPage from './Pages/UserListPage'
import UserEditPage from './Pages/UserEditPage'
import ProductListPage from './Pages/ProductListPage'
import ProductEditPage from './Pages/ProductEditPage'
import OrderListPage from './Pages/OrderListPage'

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className='py-3'>
          <Route path='/' component={HomePage} exact />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route path='/page/:pageNumber' component={HomePage} exact />
          <Route path='/search/:keyword/page/:pageNumber' component={HomePage} exact />

          <Container>
            <Route path='/order/:id' component={OrderPage} />
            <Route path='/shipping' component={ShippingPage} />
            <Route path='/payment' component={PaymentPage} />
            <Route path='/placeorder' component={PlaceOrderPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/cart/:id?' component={CartPage} />
            <Route path='/admin/userlist' component={UserListPage} />
            <Route path='/admin/user/:id/edit' component={UserEditPage} />
            <Route path='/admin/productlist' component={ProductListPage} exact />
            <Route path='/admin/productlist/:pageNumber' component={ProductListPage} exact />
            <Route path='/admin/product/:id/edit' component={ProductEditPage} />
            <Route path='/admin/orderlist' component={OrderListPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </PayPalScriptProvider>
  )
}

export default App
