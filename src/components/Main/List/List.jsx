
import React from 'react'

import {List as MUIList,ListItem, ListItemAvatar,ListItemText,Avatar ,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import useStyles from './styles';
const List = () => {
    const classes = useStyles();

    const transactions = [
        {id:1, type:"Income",category :"Salary", amount :100,date: "Fri Sep 10"},
        {id:1, type:"Expense",category :"Pets", amount :50,date: "Fri Sep 13"},
        {id:1, type:"Income",category :"Business", amount :600,date: "Fri Sep 16"}
    ];
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>(
                    <Slide direction="down" in mountOnEnter mountonExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type ==="Income"? classes.avatarIncome:classes.avatarExpense}>
                                    <AccountBalanceWalletIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`₹${transaction.amount}-${transaction.date}`}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick="" >
                                    <Delete/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
            ))}
        </MUIList>
    )
}

export default List
