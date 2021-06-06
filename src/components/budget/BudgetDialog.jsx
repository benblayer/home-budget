import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

const BudgetDialog = props => {
  const { onClose, onSubmit } = props;
  const [budget, setBudget] = useState({
    name: "",
    initialAmount: 0,
    currentAmount: 0,
  });
  const handleChange = e => {
    console.log("Change:", e);
    setBudget(...budget, { [e.target.label]: e.target.value });
  };
  return (
    <div className='budget-dialog'>
      <Dialog onClose={onClose} onSubmit={onSubmit}>
        <DialogTitle>Add new budget</DialogTitle>
        <List>
          <ListItem>
            <ListItemText>Name:</ListItemText>
            <TextField
              id='standard-basic'
              label='name'
              value={budget.name}
              onChange={handleChange}
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default BudgetDialog;
