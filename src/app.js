import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/appRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selector/expenses';

const store = configureStore();

store.dispatch(addExpense({description:'rent', amount: 2000}))
store.dispatch(addExpense({description:'water bill', amount: 2000}))
store.dispatch(addExpense({description:'gas bill', createdAt: 1000}))
// store.dispatch(setTextFilter('bill'));

const state = store.getState()

store.subscribe(() => {
    console.log(state)
})

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

const container = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
)

const app = document.getElementById('app');

ReactDOM.render(container, app);
