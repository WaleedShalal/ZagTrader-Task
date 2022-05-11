import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import tradingPortfolioImg from "../../images/cov-portfolio.svg";
import styles from "./CopyTradingPortfolio.module.scss";

function CopyTradingPortfolio() {
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
          <h2 className='mb-0'>Copy-trading | Portfolio</h2>
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
              <span>Start new Following</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.section__bodyWrapper} ${
          isExpanded && styles.isExpanded
        }`}>
        <div className={`${styles.body} ${isExpanded && styles.isExpanded}`}>
          <figure className={`${styles.body__image} mb-0`}>
            <img src={tradingPortfolioImg} alt='contest img' />
          </figure>
          <div className={`${styles.title__Wrapper}`}>
            <h2 className={`${styles.title} mb-0`}>
              Make profits with top traders!
            </h2>
            <h5 className={`${styles.sub__title} mb-0`}>
              Convesting Copy-trading Module allows you to automatically copy
              the traders of the best performin traders
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

export default CopyTradingPortfolio;
