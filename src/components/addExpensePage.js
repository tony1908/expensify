import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import { addExpense } from '../actions/expenses'

const ExpensesPage = props => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={ expense => {
                console.log(expense)
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
)

export default connect()(ExpensesPage);