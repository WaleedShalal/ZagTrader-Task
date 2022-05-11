import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "./TotalFunds.module.scss";

function TotalFunds() {
  return (
    <div className={styles.total__funds}>
      <div className={`${styles.total__fundsHeader} d-flex`}>
        <h3 className={`${styles.funds__headerTitle} mb-0`}>
          <span>Total funds</span>
          <span>
            <FontAwesomeIcon icon={solid("circle-exclamation")} />
          </span>
        </h3>
        <div className={`${styles.funds__headerMask} ms-auto d-flex`}>
          <div className='pe-2'>Mask</div>
          <div className={styles.mask__switch}>
            <input
              id='input__switch'
              type='checkbox'
              className={styles["switch__inputToggle"]}
            />
            <label
              htmlFor='input__switch'
              className={styles["switch__inputLabel"]}></label>
          </div>
        </div>
      </div>
      <div className={`${styles.total__fundsFooter} d-flex`}>
        <h3 className={`${styles.funds__footerAmount} text-white`}>≈ 0 USD</h3>
        <div className={`${styles.funds__footerButtons} d-flex ms-auto`}>
          <button
            className={`${styles.footer__buttonExchange} text-capitalize`}>
            exhange
          </button>
          <button className={`${styles.footer__buttonDeposit} text-capitalize`}>
            deposit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TotalFunds;
