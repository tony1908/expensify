import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './expenseListFilter';

const ExpenseDashboard = props => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboard;