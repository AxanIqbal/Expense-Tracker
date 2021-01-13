import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import ListItem from '@material-ui/core/ListItem';
import {Button,ListGroupItem} from 'react-bootstrap';
import ListItemText from '@material-ui/core/ListItemText';

//Money formatter function
function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        '$' +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
            <ListItem className={transaction.amount < 0 ? 'minus' : 'plus'}>
                <ListItemText primary={transaction.text} secondary={<span>{sign}{moneyFormatter(transaction.amount)}</span>} />
                <Button variant={"danger"} onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</Button>
            </ListItem>
    )
}
