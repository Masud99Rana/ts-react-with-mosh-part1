import "./App.css";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

import ExpenseList from "./expense-tracker/components/ExpenseList";

import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "aaa" },
    { id: 2, description: "bbb", amount: 15, category: "aaa" },
    { id: 3, description: "ccc", amount: 20, category: "aaa" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />

        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
}

export default App;
