import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import bitImg from "../../images/btc.svg";
import marginTradingImg from "../../images/margin.svg";
import styles from "./MarginTrading.module.scss";

function MarginTrading() {
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
            <FontAwesomeIcon icon={solid("chart-simple")} />
          </span>
          <h2 className='mb-0'>Margin trading</h2>
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
              <span>Open new account</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.section__bodyWrapper} ${
          isExpanded && styles.isExpanded
        }`}>
        <table className={`${styles.section__body} table`}>
          <thead>
            <tr>
              <th>Account</th>
              <th>Equity</th>
              <th>Open P/L</th>
              <th>Available margin, %</th>
              <th>Info</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='d-flex'>
                  <figure className='mb-0 pe-2'>
                    <img src={bitImg} alt='' />
                  </figure>
                  <span>Margin BTC</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0 BTC</span>
                  <span>≈ 0 USD</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0 BTC</span>
                  <span>≈ 0 USD</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0%</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>—</span>
                </div>
              </td>
              <td>
                <div className='d-flex'>
                  <button className={`${styles.deposit__button}`}>
                    Deposit
                  </button>
                  <button className={styles.trade__button}>Trade</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className={`${styles.body} ${isExpanded && styles.isExpanded}`}>
          <figure className={`${styles.body__image} mb-0`}>
            <img src={marginTradingImg} alt='contest img' />
          </figure>
          <div className={`${styles.title__Wrapper}`}>
            <h2 className={`${styles.title} mb-0`}>Open new Margin account!</h2>
            <h5 className={`${styles.sub__title} mb-0`}>
              You can open additional Margin accounts in USDC,ETH,USDT and other
              currencies
            </h5>
          </div>
          <div className={styles.body__linkWrapper}>
            <Link to='/sign-in' className={styles.body__link}>
              <span>New account</span>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default MarginTrading;
