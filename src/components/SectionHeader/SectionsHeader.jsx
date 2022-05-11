import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "./SectionsHeader.module.scss";

function SectionsHeader({ headerTitle, handleExpandeTable, isExpanded }) {
  return (
    <div className={`${styles.header__wrapper}`}>
      <div className={`${styles.header} ${isExpanded && styles.expanded}`}>
        <div
          className={styles.header__title}
          onClick={() => handleExpandeTable(!isExpanded)}>
          <span className={`${styles.header__icon}`}>
            <FontAwesomeIcon icon={solid("wallet")} />
          </span>
          <h2 className='mb-0'>{headerTitle}</h2>
          <span
            className={`${styles.chevron__icon} ${
              isExpanded && styles.expanded
            }`}>
            <FontAwesomeIcon icon={solid("chevron-down")} />
          </span>
        </div>
        <div
          className={`${styles.header__totalEquity} ${
            isExpanded && styles.header__totalEquityCollapsed
          } d-flex ${!isExpanded && styles.expanded}`}>
          <h5 className='mb-0'>Total equity</h5>
          <h4 className='text-white mb-0'>≈ 0 USD</h4>
        </div>
      </div>
    </div>
  );
}

export default SectionsHeader;
