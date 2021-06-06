import React, { useReducer } from "react";
import BudgetContext from "./budgetContext";
import budgetReducer from "./budgetReducer";
import {
  ADD_BUDGET,
  DELETE_BUDGET,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BUDGET,
  GET_ALL_BUDGETS
} from "../types";
import axios from 'axios';

const BudgetState = props => {
  const initialState = {
    budgets: [
      {
        name: 'Bills',
        startDate: Date.now(),
        durationInMonths: 1,
        initialAmount: 5000,
        currentAmount: 5000,
      },
      {
        name: 'Fun',
        startDate: Date.now(),
        durationInMonths: 1,
        initialAmount: 3000,
        currentAmount: 3000,
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const getAllBudgets = async () => {
    const budgets = await axios.get('/budgets');
    if (budgets) {
      dispatch({ type: GET_ALL_BUDGETS, payload: budgets })
    } else {
      console.error('failed to get all budgets');
    }
  }

  const addBudget = async budget => {
    const addedBudget = await axios.post('/budgets', budget)
    if (addedBudget) {
      dispatch({ type: ADD_BUDGET, payload: budget });
    } else {
      console.error('failed to add budget', budget.name)
    }
  };
  const deleteBudget = async name => {
    const deleted = await axios.delete('/budgets', { 
      data: {
        budgetName: name
      }
    })
    if (deleted) {
      dispatch({ type: DELETE_BUDGET, payload: { name } });
    } else {
      console.error('failed to delete budget', name);
    }
  };
  const setCurrent = name => {
    dispatch({ type: SET_CURRENT, payload: { name } });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const updateBudget = (name, amount) => {
    dispatch({ type: UPDATE_BUDGET, payload: { name, amount } });
  };

  return (
    <BudgetContext.Provider
      value={{
        budgets: state.budgets,
        current: state.current,
        addBudget,
        deleteBudget,
        setCurrent,
        clearCurrent,
        updateBudget,
        getAllBudgets
      }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};

export default BudgetState;
