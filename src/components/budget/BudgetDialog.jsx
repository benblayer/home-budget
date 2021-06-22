import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const BudgetDialog = ({ onClose, onSubmit, open }) => {
  const [budget, setBudget] = useState({
    name: "",
    initialAmount: 0,
    currentAmount: 0,
    startDate: "",
    durationInMonths: 0,
    category: "",
  });
  const handleChange = e => {
    console.log("Change:", e);
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };
  const _onSubmit = () => {
    console.log("Submit budget:", budget);
    onSubmit(budget);
  };
  return (
    <Dialog onClose={onClose} onSubmit={onSubmit} open={open}>
      <DialogTitle>Add new budget</DialogTitle>
      <List>
        <ListItem>
          <ListItemText>Name:</ListItemText>
          <TextField
            name='name'
            value={budget.name}
            onChange={handleChange}
            required
          />
        </ListItem>
        <ListItem>
          <ListItemText>Amount:</ListItemText>
          <TextField
            name='initialAmount'
            value={budget.initialAmount}
            onChange={handleChange}
            required
          />
        </ListItem>
        <ListItem>
          <ListItemText>Start Date:</ListItemText>
          <TextField
            name='startDate'
            value={budget.startDate}
            onChange={handleChange}
            required
          />
        </ListItem>
        <ListItem>
          <ListItemText>Duration (in months):</ListItemText>
          <TextField
            name='durationInMonths'
            value={budget.durationInMonths}
            onChange={handleChange}
            required
          />
        </ListItem>
        <ListItem>
          <ListItemText>Category:</ListItemText>
          <TextField
            name='category'
            value={budget.category}
            onChange={handleChange}
            required
          />
        </ListItem>
        <ListItem>
          <Button onClick={_onSubmit}>Ok</Button>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default BudgetDialog;
