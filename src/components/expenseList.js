import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selector/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>List  {props.expenses.length} </h1>
        {
            props.expenses.map(expense => {
                return (
                    <ExpenseListItem key={expense.id} {...expense} />
                )
            })
        }
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);