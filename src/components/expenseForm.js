import React from 'react';

class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: ''
    }

    onDescriptionChnage = event => {
        const description = event.target.value;
        console.log(this.state)
        this.setState({description})
    }

    onNoteChange = event => {
        const note = event.target.value;
        console.log(this.state)
        this.setState({note})
    }
    
    onAmountChange = event => {

        const amount = event.target.value;
        
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            console.log(this.state)
            this.setState({amount})
        }
    }

    render () {
        return (
            <div>
                <form>
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