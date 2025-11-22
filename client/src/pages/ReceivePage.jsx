import React from "react";
import "../cssFiles/RecievePage.css";

const dummyTx = [
  { id: 1, desc: "Received from +91 91234xxxx", date: "Nov 21", amount: 2500, type: "in" },
  { id: 2, desc: "Sent to +91 98xxxxxxx", date: "Nov 20", amount: 1200, type: "out" },
];

export default function ReceivePage() {
  return (
  <div className="receive-page">
  <div className="receive-header">
    <h2 className="receive-title">Transactions</h2>
    <p className="receive-subtitle">Your recent payments & transfers</p>
  </div>

  <div className="tx-list">
    {dummyTx.map((tx) => (
      <div key={tx.id} className="tx-card">
        
        <div className="flex justify-between">
          <div>
            <div className="tx-desc">{tx.desc}</div>
            <div className="tx-date">{tx.date}</div>
          </div>

          <div className={tx.type === "in" ? "tx-amount-in" : "tx-amount-out"}>
            {tx.type === "in" ? "+" : "-"} ₹{tx.amount}
          </div>
        </div>

        <span className={`tx-badge ${tx.type === "in" ? "tx-in" : "tx-out"}`}>
          {tx.type === "in" ? "Money Received" : "Money Sent"}
        </span>

      </div>
    ))}
  </div>
</div>

  );
}
