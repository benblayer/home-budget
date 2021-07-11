import React, { Fragment, useContext, useState } from "react";
import BudgetContext from "../context/budget/budgetContext";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import NewTransactionInput from "../components/transaction/NewTransactionInput";

const BudgetPage = () => {
  const { currentBudget, updateBudget } = useContext(BudgetContext);
  const [newTransaction, setNewTransaction] = useState(false);
  const history = useHistory();

  const onAddTransaction = () => {
    setNewTransaction(true);
  };

  const onGoBack = () => {
    history.push("/");
  };

  const onEditBudgetDetails = () => {
    console.log("Need to impl edit budget details");
  };

  const onSaveNewTransaction = transactionData => {
    const updatedBudget = {
      ...currentBudget,
      transactions: [...currentBudget.transactions, transactionData],
    };
    updateBudget(updatedBudget);
    setNewTransaction(false);
  };

  return (
    <Fragment>
      <h1>{currentBudget.name}</h1>
      <h3>Current Amount: {currentBudget.currentAmount}</h3>
      <ul>
        <li>
          <Button onClick={onAddTransaction}>Add Transaction</Button>
        </li>
        <li>
          <Button onClick={onEditBudgetDetails}>Edit Budget Details</Button>
        </li>
        <li>
          <Button onClick={onGoBack}>Go back</Button>
        </li>
      </ul>
      <Divider></Divider>
      {currentBudget.transactions.map(transaction => (
        <div key={transaction.id}>
          <span>{transaction.date}&nbsp</span>
          <span>{transaction.description}&nbsp</span>
          <span>{transaction.amount}&nbsp</span>
          <span>({transaction.name})</span>
        </div>
      ))}
      {newTransaction && (
        <NewTransactionInput
          onSave={onSaveNewTransaction}
        ></NewTransactionInput>
      )}
    </Fragment>
  );
};

export default BudgetPage;
