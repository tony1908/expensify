import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();

const now = moment();
console.log(now.format('MMM Do YYYY'))

class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused:false, 
        error: ''
    }

    onDescriptionChnage = event => {
        const description = event.target.value;
        this.setState({description})
    }

    onNoteChange = event => {
        const note = event.target.value;
        this.setState({note})
    }
    
    onAmountChange = event => {

        const amount = event.target.value;
        
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({amount})
        }
    }

    onDateChange = createdAt => {
        if (createdAt) return this.setState({createdAt});
    }

    onFocusedChange = focused => {
        this.setState({calendarFocused: focused.focused})
    }

    onSubmit = event => {
        event.preventDefault();
        console.log("state: ",this.state)
        if(!this.state.description || !this.state.amount) return this.setState({error: 'Please provide description or amount'})
        this.setState({error:''})
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        })
    }

    render () {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChnage}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusedChange}
                        numberOfMonths={1}
                        isOutsideRange={day => false}
                    />
                    <textarea 
                        placeholder="add a note to your expense"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    >
                    </textarea>
                    <button> Add Expense </button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;