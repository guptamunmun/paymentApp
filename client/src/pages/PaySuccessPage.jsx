import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../cssFiles/SuccessPage.css";

export default function PaySuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount || "0";
  const phone = location.state?.phone || "";

  return (
    <div className="success-container">
      <div className="success-card">

        <div className="success-icon">
          <div className="success-circle">
            <svg className="success-tick" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h3 className="success-title">Payment Successful</h3>
        <p className="success-message">
          ₹ {amount} sent to {phone}
        </p>

        <div className="success-btn-group">
          <button className="home-btn" onClick={() => navigate("/home")}>
            Back to Home
          </button>

          <button className="balance-btn" onClick={() => alert("Balance feature coming soon…")}>
            Check Balance
          </button>
        </div>

      </div>
    </div>
  );
}
