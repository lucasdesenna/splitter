import React from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import sass from './WhoOwnsWhatToWhom.sass';

const getTransactions = (creditors, debtors) => {
  let d = 0;
  const transactions = [];

  for (let c in creditors) {
    const creditor = { ...creditors[c] };

    while (d < debtors.length && creditor.relativeValue > 0) {
      const debtor = { ...debtors[d] };
      let transactionValue = Math.min(
        creditor.relativeValue,
        Math.abs(debtor.relativeValue)
      );

      transactions.push({
        debtor: debtors[d],
        owns: parseFloat(transactionValue.toFixed(2)),
        creditor: creditors[c],
      });

      creditor.relativeValue -= transactionValue;
      debtor.relativeValue += transactionValue;

      if (debtor.relativeValue === 0) d++;
    }

    debtors = debtors.filter(debtor => debtor.relativeValue < 0);
  }

  return transactions;
};

const whoOwnsWhatToWhom = props => {
  return (
    <List
      className={sass.WhoOwnsWhatToWhom}
      subheader={<ListSubheader>Acerto de Contas</ListSubheader>}
    >
      {getTransactions(props.creditors, props.debtors).map(
        (transaction, index, list) => (
          <ListItem
            key={`transaction-${index}`}
            divider={index === list.length - 1}
            dense={true}
            classes={{ root: sass.transaction }}
          >
            <ListItemAvatar className={sass.transactionDebtor}>
              <Avatar
                src={transaction.debtor.avatarUrl}
                alt={transaction.debtor.name}
              />
            </ListItemAvatar>
            <div className={sass.transactionValue}>{transaction.owns}</div>
            <div className={sass.transactionValueHead} />
            <ListItemAvatar className={sass.transactionCreditor}>
              <Avatar
                src={transaction.creditor.avatarUrl}
                alt={transaction.creditor.name}
              />
            </ListItemAvatar>
          </ListItem>
        )
      )}
    </List>
  );
};

export default whoOwnsWhatToWhom;
