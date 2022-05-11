import { useState } from "react";
import SectionsHeader from "../SectionHeader/SectionsHeader";
import bitImg from "../../images/btc.svg";
import covImg from "../../images/cov.svg";
import ethImg from "../../images/eth.svg";
import usdcImg from "../../images/usdc.svg";
import usdtImg from "../../images/usdt.svg";
import styles from "./Wallets.module.scss";

function Wallets() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleExpandeTable = (expanded) => {
    setIsExpanded((prevState) => (prevState = expanded));
  };
  return (
    <section className={`${styles.wallets}`}>
      <SectionsHeader
        headerTitle='Wallets'
        handleExpandeTable={handleExpandeTable}
        isExpanded={isExpanded}
      />
      <div
        className={`${styles.section__tableWrapper} ${
          isExpanded && styles.expanded
        }`}>
        <table className={`${styles.section__table} table mb-0`}>
          <thead>
            <tr>
              <th>
                <div>Currency</div>
              </th>
              <th>
                <div>Balance</div>
              </th>
              <th>
                <div>Pending</div>
              </th>
              <th>
                <div></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='d-flex'>
                  <figure className='mb-0 pe-2'>
                    <img src={bitImg} alt='' />
                  </figure>
                  <span>Bitcoin</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0 BTC</span>
                  <span>≈ 0 USD</span>
                </div>
              </td>
              <td>
                <div>
                  <span>—</span>
                </div>
              </td>
              <td>
                <div>
                  <button className={`${styles.deposit__button}`}>
                    Deposit
                  </button>
                  <button className={styles.withdraw__button}>Withdraw</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex'>
                  <figure className='mb-0 pe-2'>
                    <img src={ethImg} alt='' />
                  </figure>
                  <span>Ethereum</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0 ETH</span>
                  <span>≈ 0 USD</span>
                </div>
              </td>
              <td>
                <div>
                  <span>—</span>
                </div>
              </td>
              <td>
                <div className=''>
                  <button className={styles.deposit__button}>Deposit</button>
                  <button className={styles.withdraw__button}>Withdraw</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex'>
                  <figure className='mb-0 pe-2'>
                    <img src={usdtImg} alt='' />
                  </figure>
                  <span>Tether USD</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0 USDT</span>
                  <span>≈ 0 USD</span>
                </div>
              </td>
              <td>
                <div>
                  <span>—</span>
                </div>
              </td>
              <td>
                <div className=''>
                  <button className={styles.deposit__button}>Deposit</button>
                  <button className={styles.withdraw__button}>Withdraw</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex'>
                  <figure className='mb-0 pe-2'>
                    <img src={usdcImg} alt='' />
                  </figure>
                  <span>USD coin</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0 USDC</span>
                  <span>≈ 0 USD</span>
                </div>
              </td>
              <td>
                <div>
                  <span>—</span>
                </div>
              </td>
              <td>
                <div className=''>
                  <button className={styles.deposit__button}>Deposit</button>
                  <button className={styles.withdraw__button}>Withdraw</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex'>
                  <figure className='mb-0 pe-2'>
                    <img src={covImg} alt='' />
                  </figure>
                  <span>Convesting</span>
                </div>
              </td>
              <td>
                <div className='d-flex flex-column'>
                  <span>0 COV</span>
                  <span>≈ 0 USD</span>
                </div>
              </td>
              <td>
                <div>
                  <span>—</span>
                </div>
              </td>
              <td>
                <div className=''>
                  <button className={styles.deposit__button}>Deposit</button>
                  <button className={styles.withdraw__button}>Withdraw</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Wallets;
