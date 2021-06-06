import {
  ADD_BUDGET,
  DELETE_BUDGET,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  UPDATE_BUDGET_AMOUNT,
} from "../types";

const budgetReducer = (state, action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    case DELETE_BUDGET:
      return {
        ...state,
        budgets: state.budgets.filter(
          budget => budget.name !== action.payload.name
        ),
      };
    case UPDATE_BUDGET_AMOUNT:
      return {
        ...state,
        budgets: state.budgets.map(
          budget =>
            (budget.name = action.payload.name
              ? { ...budget, amount: budget.amount + action.payload.amount }
              : budget)
        ),
      };
    default:
      return state;
  }
};

export default budgetReducer;
