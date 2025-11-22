import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../cssFiles/EnterPhonePage.css";

export default function EnterPhonePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || "0";
  const [phone, setPhone] = useState("");

  const submit = () => {
    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }
    navigate("/pay-success", { state: { amount, phone } });
  };

  return (
    <div className="enter-container">
      <div className="enter-card">

        <h2 className="enter-title">Enter Recipient Phone</h2>
        <p className="enter-subtitle">We will send money to this number</p>

        <div className="phone-box">
          <span className="phone-prefix">+91</span>
          <input
            type="tel"
            maxLength={10}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="phone-input"
            placeholder="98765 43210"
          />
        </div>

        <button onClick={submit} className="enter-btn">
          Pay ₹{amount}
        </button>

      </div>
    </div>
  );
}
