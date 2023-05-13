import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={css.statistics}>
        {title !== '' && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li className={`${css.item} ${css[label.substring(1)]}`} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};