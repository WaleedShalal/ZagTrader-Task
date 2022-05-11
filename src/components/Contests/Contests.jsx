import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import contestImg from "../../images/competitions.webp";
import styles from "./Contests.module.scss";

function Contests() {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleExpandeTable = (expanded) => {
    setIsExpanded((prevState) => (prevState = expanded));
  };
  return (
    <section className={styles.contests}>
      <div className={`${styles.header__wrapper}`}>
        <div className={`${styles.header} d-flex`}>
          <div
            className={styles.header__title}
            onClick={() => handleExpandeTable(!isExpanded)}>
            <span className={`${styles.header__icon}`}>
              <FontAwesomeIcon icon={solid("trophy")} />
            </span>
            <h2 className='mb-0'>Contests</h2>
            <span
              className={`${styles.chevron__icon} ${
                isExpanded && styles.expanded
              }`}>
              <FontAwesomeIcon icon={solid("chevron-down")} />
            </span>
          </div>
          <div className={styles.join__contestLinkWrapper}>
            <Link to='/sign-in' className={styles.join__contestLink}>
              <span>
                <FontAwesomeIcon icon={solid("plus")} />
              </span>
              <span>Join contest</span>
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
            <img src={contestImg} alt='contest img' />
          </figure>
          <div className={`${styles.title__Wrapper}`}>
            <h2 className={`${styles.title} mb-0`}>Join Contest & Win $$!</h2>
            <h5 className={`${styles.sub__title} mb-0`}>
              Free virtual funds are provided to all participants
            </h5>
          </div>
          <div className={styles.body__linkWrapper}>
            <Link to='/sign-in' className={styles.body__link}>
              <span>Join now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contests;
