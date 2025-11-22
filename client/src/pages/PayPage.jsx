import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../cssFiles/pay.css";

export default function PayPage() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const startPayment = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    navigate("/enter-phone", { state: { amount } });
  };

  return (
    <div className="pay-container">

      <div className="pay-card">
        <h2 className="pay-title">Send Money</h2>

        {/* amount label */}
        <label className="pay-label">Enter Amount</label>

        {/* amount input box */}
        <div className="amount-box">
          <span className="currency-icon">₹</span>
          <input
            type="number"
            className="amount-input"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* continue button */}
        <button onClick={startPayment} className="pay-btn">
          Continue
        </button>
      </div>

    </div>
  );
}
