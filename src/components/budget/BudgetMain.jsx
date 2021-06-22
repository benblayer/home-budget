import React, { useContext, useEffect, useState } from "react";
import BudgetTile from "./BudgetTile";
import BudgetContext from "../../context/budget/budgetContext";
import Button from "@material-ui/core/Button";
import BudgetDialog from "./BudgetDialog";

const BudgetMain = () => {
  const addNewBudgetLabel = "Add New Budget";
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log("budget main loaded");
  const budgetContext = useContext(BudgetContext);
  const {
    budgets,
    // current,
    addBudget,
    deleteBudget,
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

  const ref = React.createRef();

  const onAddNewBudget = () => {
    setDialogOpen(true);
  };

  const onCloseDialog = () => {
    setDialogOpen(false);
  };

  const onSubmitDialog = budget => {
    console.log("submit");
    setDialogOpen(false);
    addBudget(budget);
  };

  const onDelete = name => {
    deleteBudget(name);
  }

  console.log("Current budgets:", budgets);

  return (
    <div className='budget-main'>
      <div ref={ref}>
        <BudgetDialog
          onClose={onCloseDialog}
          onSubmit={onSubmitDialog}
          open={dialogOpen}
        />
      </div>
      <div>
        <Button onClick={onAddNewBudget}>{addNewBudgetLabel}</Button>
      </div>
      <div>
        {budgets.map(budget => {
          console.log("Budget:", budget);
          return <BudgetTile key={budget._id} budget={budget} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default BudgetMain;
