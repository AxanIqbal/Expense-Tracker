import './App.css';
import React from 'react'

import {GlobalProvider} from './context/GlobalState';
import {TransactionList} from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'

function App() {

    return (
        <GlobalProvider>
            <h2 id={"Header-t"}>Expense Tracker</h2>
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </GlobalProvider>
    );
}

export default App;
