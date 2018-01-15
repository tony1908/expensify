import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters'

const ExpenseListFilter = (props) => (
    <div>
        <input type="text" defaultValue={props.filters.text} onChange={event => {
            props.dispatch(setTextFilter(event.target.value))
        }} />
        <select>
            <option>Date</option>
            <option>Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);