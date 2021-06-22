import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const BudgetTile = ({budget, onDelete}) => {
  const {
    name,
    startDate,
    durationInMonths,
    initialAmount,
    currentAmount,
    category,
  } = budget;
  console.log("Budget Card:", name);
  return (
    <Card>
      <CardHeader title={name}></CardHeader>
      <CardContent>
        <ul>
          <li>{startDate}</li>
          <li>{durationInMonths}</li>
          <li>{initialAmount}</li>
          <li>{currentAmount}</li>
          <li>{category}</li>
        </ul>
        <Button onClick={() => onDelete(name)}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default BudgetTile;
