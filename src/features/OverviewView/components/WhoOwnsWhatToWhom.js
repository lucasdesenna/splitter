import React from 'react';

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
        debtor: debtor.name,
        owns: parseFloat(transactionValue.toFixed(2)),
        creditor: creditor.name,
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
    <ul className={sass.WhoOwnWhatToWhom}>
      {getTransactions(props.creditors, props.debtors).map(
        (transaction, index) => (
          <li key={`transaction-${index}`}>{`${transaction.debtor} owns ${
            transaction.owns
          } to ${transaction.creditor}`}</li>
        )
      )}
    </ul>
  );
};

export default whoOwnsWhatToWhom;
