import React from "react";

const BudgetTile = budget => {
  const {
    name,
    // startDate,
    // durationInMonths,
    // initialAmount,
    // currentAmount,
    // category,
  } = budget;
  return <div>{name}</div>;
};

export default BudgetTile;
