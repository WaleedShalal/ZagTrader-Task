import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import topTradingData from "./CopyTradingData";
import styles from "./CopyTradingTop.module.scss";

function CopyTradingTop() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleExpandeTable = (expanded) => {
    setIsExpanded((prevState) => (prevState = expanded));
  };
  return (
    <section className={styles.section__wrapper}>
      <div className={`${styles.section__header}`}>
        <div
          className={styles.header__title}
          onClick={() => handleExpandeTable(!isExpanded)}>
          <span className={`${styles.header__icon}`}>
            <FontAwesomeIcon icon={solid("money-bill-trend-up")} />
          </span>
          <h2 className='mb-0'>Copy-trading | Top</h2>
          <span
            className={`${styles.chevron__icon} ${
              isExpanded && styles.expanded
            }`}>
            <FontAwesomeIcon icon={solid("chevron-down")} />
          </span>
        </div>
        <div
          className={`${styles.header__linkWrapper} ${
            isExpanded && styles.isExpanded
          }`}>
          <Link to='/sign-in' className={styles.header__link}>
            <span>See all</span>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.section__bodyWrapper} ${
          isExpanded && styles.isExpanded
        }`}>
        <div className={styles.section__body}>
          {topTradingData.map((tradeData) => {
            return (
              <div className={styles.trading__blockWrapper} key={tradeData.id}>
                <div className={styles.trading__block}>
                  <h3 className={`${styles.trading__title} mb-0`}>
                    {tradeData.title}
                  </h3>
                  <div className={styles.trading__rate}>
                    <div className={styles.trading__rateNumber}>
                      <span>
                        <FontAwesomeIcon icon={solid("user-group")} />
                      </span>
                      <span>{tradeData.followers}</span>
                    </div>
                    <div className={styles.trading__rateTotal}>
                      <span
                        className={` ${
                          tradeData.rate - 1 >= 0 && styles.isRated
                        }`}>
                        <FontAwesomeIcon icon={solid("star")} />
                      </span>
                      <span
                        className={` ${
                          tradeData.rate - 2 >= 0 && styles.isRated
                        }`}>
                        <FontAwesomeIcon icon={solid("star")} />
                      </span>
                      <span
                        className={` ${
                          tradeData.rate - 3 >= 0 && styles.isRated
                        }`}>
                        <FontAwesomeIcon icon={solid("star")} />
                      </span>
                      <span
                        className={` ${
                          tradeData.rate - 4 >= 0 && styles.isRated
                        }`}>
                        <FontAwesomeIcon icon={solid("star")} />
                      </span>
                      <span
                        className={` ${
                          tradeData.rate - 5 >= 0 && styles.isRated
                        }`}>
                        <FontAwesomeIcon icon={solid("star")} />
                      </span>
                    </div>
                  </div>
                  <div className={styles.trading__chart}>
                    <span>
                      <svg
                        preserveAspectRatio='none'
                        className='chart'
                        viewBox='0 0 195 50'>
                        <path
                          stroke='rgb(82,175,238)'
                          strokeWidth='1'
                          fill='rgb(82,175,238)'
                          fillOpacity='0.15'
                          d={tradeData.dimensions}></path>
                      </svg>
                    </span>
                  </div>
                  <div className={styles.trade__numbersInfo}>
                    <div className={styles.total__profit}>
                      <span>Total profit</span>
                      <span>{tradeData.totalProfit}</span>
                    </div>
                    <div className={styles.followers__equity}>
                      <span>Followers' equity</span>
                      <span>{tradeData.followersEquityBTC} BTC</span>
                      <span>≈ {tradeData.followersEquityUSD} USD</span>
                    </div>
                  </div>
                  <div className={styles.trading__linkWrapper}>
                    <Link to='/copytrading' className={styles.trading__link}>
                      <span>Follow</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CopyTradingTop;
