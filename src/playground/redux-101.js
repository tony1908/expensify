import { createStore } from 'redux'

const initialState = {count:0}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return { count: state.count + action.payload.incrementBy }
        case 'DECREMENT' :
            return { count: state.count - action.payload.decrementBy }
        case 'RESET' :
            return { count: 0 }
        case 'SET' :
            return { count: action.payload.count }
        default:
            return state 
    }
}

const store = createStore(
    reducer,
    initialState
)

const unsuscribe = store.subscribe(() => {
    console.log(store.getState())
})

const increment = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    payload: {
        incrementBy
    }
})

// de esta forma detenemos la suscripcion a los cambios
// unsuscribe();

const reset = () => ({
    type: "RESET"
})

const decrement = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    payload: {
        decrementBy
    }
})

const set = ({ count = 1 } = {}) => ({
    type: "SET",
    payload: {
        count
    }
})

store.dispatch(increment({incrementBy: 5}))

store.dispatch(increment())

store.dispatch(reset())

store.dispatch(decrement())

store.dispatch(set())

