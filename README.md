This document contains a ready-to-use dummy Phone-based Payment Transfer System (Frontend + Backend) using React + Material UI (Option B) and Node.js + Express + MongoDB.

Project overview

Backend: Node.js, Express, Mongoose (MongoDB)

Frontend: React, Material UI, Axios

Auth: JWT (access token)

Features: Register / Login, add dummy bank, view balance, enter/select phone number, send money to registered phone, transaction history.


// Folder Structure (PhonePe-like Flow)
// Project Root: react-mui-bank-client
// ├── src/
// │ ├── api/
// │ │ ├── axios.js
// │ │ ├── auth.js
// │ │ ├── bank.js
// │ │ └── transactions.js
// │ ├── components/
// │ │ ├── auth/
// │ │ │ ├── Login.jsx
// │ │ │ └── Register.jsx
// │ │ ├── banks/
// │ │ │ ├── AddBank.jsx
// │ │ │ └── BankList.jsx
// │ │ ├── payments/
// │ │ │ ├── EnterPhone.jsx
// │ │ │ ├── ConfirmUser.jsx
// │ │ │ └── SendMoney.jsx
// │ │ ├── transactions/
// │ │ │ └── TransactionHistory.jsx
// │ │ ├── layout/
// │ │ │ ├── Navbar.jsx
// │ │ │ └── ProtectedRoute.jsx
// │ ├── context/
// │ │ └── AuthContext.jsx
// │ ├── pages/
// │ │ ├── RegisterPage.jsx
// │ │ ├── LoginPage.jsx
// │ │ ├── HomePage.jsx
// │ │ ├── AddBankPage.jsx
// │ │ ├── EnterPhonePage.jsx
// │ │ ├── ConfirmUserPage.jsx
// │ │ └── SendMoneyPage.jsx
// │ ├── App.jsx
// │ └── main.jsx
// ├── package.json
// └── vite.config.js


// Navigation Flow (Like PhonePe)
// 1. RegisterPage → LoginPage
// 2. LoginPage → HomePage
// 3. HomePage → AddBankPage
// 4. After adding bank → EnterPhonePage
// 5. Enter phone number → ConfirmUserPage
// 6. Confirm user → SendMoneyPage
// 7. View TransactionHistory


// HomePage Cards (PhonePe style):
// - My Bank Accounts
// - Send Money
// - Transaction History


// AddBankPage: Add dummy bank with name, account number (auto), initial balance.


// EnterPhonePage: Input OR Select from saved contacts.


// ConfirmUserPage: Display user details fetched from backend after typing phone.


// SendMoneyPage: Enter amount + select bank + confirm.








