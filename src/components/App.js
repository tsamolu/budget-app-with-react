import React from "react";
import "./App.css";
import Header from "./Header";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import IncomeList from "./IncomeList";
import ExpensesList from "./ExpensesList";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpensesList />
      </div>
    </div>
  );
}

export default App;
