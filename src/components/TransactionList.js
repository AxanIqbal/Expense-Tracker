import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import {ListGroup} from "react-bootstrap";
import { GlobalContext } from '../context/GlobalState';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <Divider />
            <List className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </List>
        </>
    )
}
