// @flow
import React from 'react';

import UserType from 'types/User.type';
import CircleType from 'types/Circle.type';

import styles from './WhoOwnsWhatToWhom.sass';

type PropsType = {
    circle: CircleType
};

const getTransactions = (circle: CircleType): any[] => {
    let creditors: UserType[] = circle.creditors;
    let debtors: UserType[] = circle.debtors;
    const transactions = [];

    for (const _debtor of debtors) {
        for (const _creditor of creditors) {
            let newRelativeValue =
                _creditor.relativeValue + _debtor.relativeValue;

            if (newRelativeValue < 0) {
                transactions.push({
                    debtor: _debtor,
                    owns: Math.abs(+_creditor.relativeValue.toFixed(2)),
                    creditor: _creditor
                });

                _debtor.relativeValue = newRelativeValue;
                _creditor.relativeValue = 0;
            } else {
                _creditor.relativeValue = newRelativeValue;

                transactions.push({
                    debtor: _debtor,
                    owns: Math.abs(+_debtor.relativeValue.toFixed(2)),
                    creditor: _creditor
                });

                break;
            }
        }
        creditors = creditors.filter(creditor => creditor.relativeValue > 0);
    }

    return transactions;
};

const whoOwnsWhatToWhom = (props: PropsType) => (
    <ul className={styles.WhoOwnWhatToWhom}>
        {getTransactions(props.circle).map((transaction, index) => {
            return (
                <li key={`transaction-${index}`}>{`${
                    transaction.debtor.name
                } owns ${transaction.owns} to ${
                    transaction.creditor.name
                }`}</li>
            );
        })}
    </ul>
);

export default whoOwnsWhatToWhom;
