import {
  ADD_BUDGET,
  DELETE_BUDGET,
  GET_ALL_BUDGETS,
  SET_CURRENT,
  CLEAR_CURRENT,
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
    case GET_ALL_BUDGETS:
      return {
        ...state,
        budgets: action.payload.data,
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
    case SET_CURRENT:
      console.log("Setting current:", action.payload);
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      console.log("Clearing current");
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};

export default budgetReducer;
