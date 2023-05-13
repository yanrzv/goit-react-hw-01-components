import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';
import { TableBody } from 'components/TransactionTable/TransactionTable';

export const TransactionHistory = ({ items }) => {
    return ( 
        <table className={css.transactionHistory}>
            <thead className={css.transactionTableHead}>
                <tr className={css.tableHeadList}>
                <th className={css.tableHeadItem}>Type</th>
                <th className={css.tableHeadItem}>Amount</th>
                <th className={css.tableHeadItem}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transactionTableBody}>
                {items.map((item) => (
                    <TableBody
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />  
                ))}

            </tbody>
        </table>

    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};