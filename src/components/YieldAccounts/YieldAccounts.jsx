import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "./YieldAccounts.module.scss";

function YieldAccounts() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleExpandeTable = (expanded) => {
    setIsExpanded((prevState) => (prevState = expanded));
  };
  return (
    <section className={styles.section__wrapper}>
      <div
        className={`${styles.section__header} ${
          isExpanded && styles.isExpanded
        }`}>
        <div
          className={styles.section__headerTitle}
          onClick={() => handleExpandeTable(!isExpanded)}>
          <span className={`${styles.header__icon}`}>
            <FontAwesomeIcon icon={solid("arrow-up-right-dots")} />
          </span>
          <h2 className='mb-0'>Yield Accounts</h2>
          <span
            className={`${styles.chevron__icon} ${
              isExpanded && styles.expanded
            }`}>
            <FontAwesomeIcon icon={solid("chevron-down")} />
          </span>
        </div>
        <div
          className={`${styles.section__headerDetails} ${
            isExpanded && styles.isExpanded
          }`}>
          <div className={styles.details__totalAmount}>
            <h5 className='mb-0'>Total equity</h5>
            <h4 className='text-white mb-0'>≈ 0 USD</h4>
          </div>
          <div
            className={`${styles.details__linkWrapper} ${
              isExpanded && styles.isExpanded
            }`}>
            <Link to='/sign-in' className={styles.details__link}>
              <span>
                <FontAwesomeIcon icon={solid("plus")} />
              </span>
              <span>Start earning</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.section__bodyWrapper} ${
          isExpanded && styles.isExpanded
        }`}>
        <table className={`${styles.section__body} table mb-0`}>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Staked</th>
              <th>Equity</th>
              <th>Total earned</th>
              <th>Today earned</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan='6'>Nothing to display</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default YieldAccounts;
