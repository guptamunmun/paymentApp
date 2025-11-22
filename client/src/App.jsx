import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PayPage from "./pages/PayPage";
import EnterPhonePage from "./pages/EnterPhonePage";
import PaySuccessPage from "./pages/PaySuccessPage";
import ReceivePage from "./pages/ReceivePage";
import BankDetailsPage from "./pages/BankDetailsPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/layout/ProtectedRoute";
// import { DarkModeProvider } from "./context/DarkModeContext";
import "./cssFiles/global.css";

function App() {
  return (
      <AuthProvider>
       
        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pay"
            element={
              <ProtectedRoute>
                <PayPage />
              </ProtectedRoute>
            }
          />
           <Route
            path="/enter-phone"
            element={
              <ProtectedRoute>
                <EnterPhonePage />
              </ProtectedRoute>
            }
          />
           <Route
            path="/pay-success"
            element={
              <ProtectedRoute>
                <PaySuccessPage />
              </ProtectedRoute>
            }
          />
           <Route
            path="/receive"
            element={
              <ProtectedRoute>
                <ReceivePage />
              </ProtectedRoute>
            }
          />
            <Route
            path="/bank-details"  
            element={
              <ProtectedRoute>
                <BankDetailsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
     
    
  );
}

export default App;
