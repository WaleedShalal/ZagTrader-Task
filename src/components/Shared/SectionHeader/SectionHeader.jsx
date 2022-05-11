import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "./SectionHeader.module.scss";

function SectionHeader({ headerTitle }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleExpandeTable = (expanded) => {
    setIsExpanded((prevState) => (prevState = expanded));
  };
  return (
    <section className={styles.section__wrapper}>
      <div className={styles.section__header}>
        <div
          className={styles.section__headerTitle}
          onClick={() => handleExpandeTable(!isExpanded)}>
          <span className={`${styles.header__icon}`}>
            <FontAwesomeIcon icon={solid("wallet")} />
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
    </section>
  );
}

export default SectionHeader;
