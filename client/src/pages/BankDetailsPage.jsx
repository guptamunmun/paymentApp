import React, { useState } from "react";

export default function BankDetailsPage() {
  const [bank, setBank] = useState({ name: "", account: "", ifsc: "" });

  const save = () => {
    // call API
    alert("Bank details saved");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Add Bank Details</h2>

        <input placeholder="Bank name" value={bank.name} onChange={(e) => setBank({ ...bank, name: e.target.value })} className="mt-4 w-full rounded-xl border px-4 py-3 bg-transparent border-gray-200 dark:border-gray-700" />
        <input placeholder="Account number" value={bank.account} onChange={(e) => setBank({ ...bank, account: e.target.value })} className="mt-4 w-full rounded-xl border px-4 py-3 bg-transparent border-gray-200 dark:border-gray-700" />
        <input placeholder="IFSC" value={bank.ifsc} onChange={(e) => setBank({ ...bank, ifsc: e.target.value })} className="mt-4 w-full rounded-xl border px-4 py-3 bg-transparent border-gray-200 dark:border-gray-700" />

        <button onClick={save} className="mt-6 w-full py-3 rounded-2xl bg-green-600 text-white font-semibold">Save</button>
      </div>
    </div>
  );
}
