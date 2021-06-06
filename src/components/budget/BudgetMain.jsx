import React, { useContext, useEffect } from "react";
import BudgetTile from "./BudgetTile";
import BudgetContext from "../../context/budget/budgetContext";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";

const BudgetMain = () => {
  const addNewBudget = "Add New Budget";
  console.log("budget main loaded");
  const budgetContext = useContext(BudgetContext);
  const {
    budgets,
    // current,
    // addBudget,
    // deleteBudget,
    // setCurrent,
    // clearCurrent,
    // updateBudget,
    getAllBudgets,
  } = budgetContext;
  useEffect(() => {
    console.log("BudegetMain Getting All Budgets");
    getAllBudgets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddNewBudget = () => {
      
  }

  return (
    <div class="budget-main">
      <div>
        <Button onClick={onAddNewBudget}>{addNewBudget}</Button>
      </div>
      <div>
        {budgets.map(budget => (
          <BudgetTile key={budget.name} budget={budget} />
        ))}
      </div>
    </div>
  );
};

export default BudgetMain;
