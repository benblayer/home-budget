import React, { useContext, useEffect, useState } from "react";
import BudgetTile from "../components/budget/BudgetTile";
import BudgetContext from "../context/budget/budgetContext";
import Button from "@material-ui/core/Button";
import BudgetDialog from "../components/budget/BudgetDialog";
import { useHistory } from "react-router";

const Home = () => {
  const addNewBudgetLabel = "Add New Budget";
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log("budget main loaded");
  const budgetContext = useContext(BudgetContext);
  const history = useHistory();
  const {
    budgets,
    currentBudget,
    addBudget,
    deleteBudget,
    setCurrent,
    // clearCurrent,
    // updateBudget,
    getAllBudgets,
  } = budgetContext;
  useEffect(() => {
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
    setDialogOpen(false);
    addBudget(budget);
  };

  const onDelete = name => {
    deleteBudget(name);
  };

  const onBudgetClicked = budget => {
    setCurrent(budget);
    history.push(`/budget/${budget.name.toLowerCase()}`);
  };

  return (
    <div className='budget-main'>
      <div ref={ref}>
        <BudgetDialog
          open={dialogOpen}
          onClose={onCloseDialog}
          onSubmit={onSubmitDialog}
        />
      </div>
      <div>
        <Button onClick={onAddNewBudget}>{addNewBudgetLabel}</Button>
      </div>
      <div>
        {budgets.map(budget => (
          <BudgetTile
            key={budget.name}
            budget={budget}
            onDelete={onDelete}
            onClick={onBudgetClicked}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
