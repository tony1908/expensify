import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const config = () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        })
      );
    return store;
}

export default config;
