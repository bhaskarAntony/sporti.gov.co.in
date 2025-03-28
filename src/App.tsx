import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookingConfirmation from './pages/BookingConfirmation';
import PaymentPage from './pages/PaymentPage';
import PaymentVerification from './pages/PaymentVerification';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import RoomAllocation from './pages/RoomAllocation';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Navigate to="/booking-confirmation/10829cfd3" />} />
        <Route path="/booking-confirmation/:id" element={<BookingConfirmation />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
        <Route path="/payment-verification/:id" element={<PaymentVerification />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/room-allocation/:id" element={<RoomAllocation />} />
      </Routes>
    </Router>
  );
}

export default App;