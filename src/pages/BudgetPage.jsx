import React, { Fragment, useContext } from "react";
import BudgetContext from "../context/budget/budgetContext";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

const BudgetPage = () => {
  const { currentBudget } = useContext(BudgetContext);

  const history = useHistory();

  const onGoBack = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <h1>{currentBudget.name}</h1>
      <Button onClick={onGoBack}>Go back</Button>
    </Fragment>
  );
};

export default BudgetPage;
