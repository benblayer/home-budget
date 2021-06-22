import React, { useReducer } from "react";
import BudgetContext from "./budgetContext";
import budgetReducer from "./budgetReducer";
import {
  ADD_BUDGET,
  DELETE_BUDGET,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BUDGET,
  GET_ALL_BUDGETS,
} from "../types";
import axios from "axios";

const BudgetState = props => {
  const baseUrl = "http://localhost:5000";
  const initialState = {
    budgets: [],
    current: "EMPTY",
  };

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const getAllBudgets = async () => {
    const budgets = await axios.get(`${baseUrl}/budgets`);
    if (budgets) {
      dispatch({ type: GET_ALL_BUDGETS, payload: budgets });
    } else {
      console.error("failed to get all budgets");
    }
  };

  const addBudget = async budget => {
    const addedBudget = await axios.post(`${baseUrl}/budget`, budget);
    if (addedBudget) {
      dispatch({ type: ADD_BUDGET, payload: budget });
    } else {
      console.error("failed to add budget", budget.name);
    }
  };
  const deleteBudget = async name => {
    const result = await axios.delete("/budget", {
      data: {
        budgetName: name,
      },
    });
    if (result.data.deleted) {
      dispatch({ type: DELETE_BUDGET, payload: { name } });
    } else {
      console.error("failed to delete budget", name);
    }
  };
  const setCurrent = budget => {
    dispatch({ type: SET_CURRENT, payload: budget });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  const updateBudget = budget => {
    dispatch({ type: UPDATE_BUDGET, payload: budget });
  };

  return (
    <BudgetContext.Provider
      value={{
        budgets: state.budgets,
        currentBudget: state.current,
        addBudget,
        deleteBudget,
        setCurrent,
        clearCurrent,
        updateBudget,
        getAllBudgets,
      }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};

export default BudgetState;
