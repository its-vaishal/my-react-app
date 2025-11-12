import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Componentes/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BecomeSeller from "./Seller1/BecomeSeller";
import SellerSignup from './Seller1/SellerSignup'
import BusinessDetails from './Seller1/Business-Details'
import SellerBankDetails from './Seller1/SellerBankDetails'
import SellerStoreDetails from './Seller1/SellerStoreDetails'
import SellerKYCVerification from './Seller1/SellerKYCVerification'
import SellerProductUpload from './Seller1/SellerProductUpload'
import SellerReviewSubmit from './Seller1/SellerReviewSubmit'
import SellerVerificationStatus from './Seller1/SellerVerificationStatus'
import SellerDashboard from './Seller1/SellerDashboard'
import Login from './Componentes/Login'
import Sinup from './Componentes/Sinup'

function App() {
 

  return (
    <>
      
       <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user/login" element={<Login />}/>
        <Route path="/user/Sinup" element={<Sinup />}/>
        <Route path="/seller/becomeSeller" element={<BecomeSeller />} />
        <Route path="/seller/signup" element={<SellerSignup />} />
        <Route path="/seller/businessDetails" element={<BusinessDetails />}/>
        <Route path="/seller/bankDetails" element={<SellerBankDetails/>}/>
        <Route path="/seller/storeDetails" element={<SellerStoreDetails/>}/>
        <Route path="/seller/kyc-verification" element={<SellerKYCVerification /> }/> 
        <Route path="/seller/product-upload" element={<SellerProductUpload />} />
        <Route path="/seller/review-submit" element={<SellerReviewSubmit />} />
        <Route path="/seller/verification-status" element={<SellerVerificationStatus />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
