import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import tradingStrategyImg from "../../images/cov-strategies.svg";
import styles from "./CopyTradingStrategies.module.scss";

function CopyTradingStrategies() {
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
            <FontAwesomeIcon icon={solid("money-bill-trend-up")} />
          </span>
          <h2 className='mb-0'>Copy-trading | My Strategies</h2>
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
              <span>Open new strategy</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.section__bodyWrapper} ${
          isExpanded && styles.isExpanded
        }`}>
        <div className={`${styles.body}`}>
          <figure className={`${styles.body__image} mb-0`}>
            <img src={tradingStrategyImg} alt='contest img' />
          </figure>
          <div className={`${styles.title__Wrapper}`}>
            <h2 className={`${styles.title} mb-0`}>Earn additional income!</h2>
            <h5 className={`${styles.sub__title} mb-0`}>
              Start your own Convesting Copy-trading Strategy and earn success
              fees from profitable trading
            </h5>
          </div>
          <div className={styles.body__linkWrapper}>
            <Link to='/sign-in' className={styles.body__link}>
              <span>Get started</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CopyTradingStrategies;
