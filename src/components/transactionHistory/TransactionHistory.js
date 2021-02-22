import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css'

const TransactionHistory = ({transaction}) => (
  <table className="transaction-history">
    <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {transaction.map(({id, type, amount, currency}) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};

export default TransactionHistory;