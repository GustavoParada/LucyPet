import React from 'react'
import { createStore, combineReducers } from 'redux'

// const rootReducer = combineReducers({
   
//     user: { nome: "Gustavo", email: "gustavo@dupa.pt" }
// })

const storeConfig = () => {
    return createStore(rootReducer)
}

export default storeConfig