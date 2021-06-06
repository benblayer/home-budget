const Budget = require("./model/Budget");

function createBudget(budgetData) {
  console.log("data:", budgetData);
  try {
    const budget = new Budget(budgetData);
    return budget.save();
  } catch (error) {
    console.error("error in create budget", error);
  }
}

async function getBudget(name) {
  try {
    const budget = await Budget.find({ name });
    return budget;
  } catch (error) {
    console.error("error in get budget", error);
    return {};
  }
}

module.exports.getAllBudgets = async () => {
  try {
    const budgets = await Budget.find();
    console.log("get all budgets:", budgets);
    return budgets;
  } catch (error) {
    console.error("error in get all budgets");
    return [];
  }
};

async function updateBudgetAmount(name, amount) {
  try {
    await Budget.findAndModify({ name }, { amount });
  } catch (error) {
    console.error("error in update budget amount", error);
  }
}

async function deleteBudget(name) {
  try {
    await Budget.findAndDelete({ name });
  } catch (error) {
    console.error("error in delete budget", error);
  }
}
