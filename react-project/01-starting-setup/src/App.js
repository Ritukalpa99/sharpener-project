import ExpenseItem from "./components/ExpenseItem";

function App() {
  const value = "some value";
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      locationOfExpense:'Delhi',
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49,
    locationOfExpense:'Chennai', date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      locationOfExpense:'Kochi',
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      locationOfExpense:'Noida',
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        val={value}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        locationOfExpense={expenses[0].locationOfExpense}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        locationOfExpense={expenses[1].locationOfExpense}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        locationOfExpense={expenses[2].locationOfExpense}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        locationOfExpense={expenses[3].locationOfExpense}
      />
    </div>
  );
}

export default App;
