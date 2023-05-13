import PropTypes from 'prop-types';
import css from 'components/TransactionTable/TransactionTable.module.css';

export const TableBody = ({ id, type, amount, currency }) => {
    return (
        <tr id={id} className={css.tableBodyList}>
            <td className={css.tableBodyItem}>{type}</td>
            <td className={css.tableBodyItem}>{amount}</td>
            <td className={css.tableBodyItem}>{currency}</td>
        </tr>
  );
};

TableBody.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};