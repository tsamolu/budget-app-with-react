import React from "react";

const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <form action="">
        <div className="input-group income">
          <input type="text" placeholder="Add Icome" autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="Submit" value="Submit" />
        </div>
      </form>
      <form action="">
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense" autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="Submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
