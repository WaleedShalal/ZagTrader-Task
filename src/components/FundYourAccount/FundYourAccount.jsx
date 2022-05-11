import { useContext, useEffect } from "react";
import { UserLoginContext } from "../../components/Context/UserLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import depositImg from "../../images/deposit@2x.webp";
import styles from "./FundYourAccount.module.scss";

function FundYourAccount() {
  const { isJustLogged, setIsJustLogged } = useContext(UserLoginContext);
  const handleCloseModal = () => {
    setIsJustLogged(false);
    sessionStorage.setItem("justLogged", JSON.stringify(isJustLogged));
  };
  useEffect(() => {
    function handleEscapeKeyClick(e) {
      if (e.key === "Escape") {
        setIsJustLogged(false);
        sessionStorage.setItem("justLogged", JSON.stringify(isJustLogged));
      }
    }
    window.addEventListener("keydown", handleEscapeKeyClick);
    return () => window.removeEventListener("keydown", handleEscapeKeyClick);
  }, [isJustLogged, setIsJustLogged]);

  return (
    <section className={styles.fund__yourAccount}>
      <div className={`${styles.deposit__wrapper}`}>
        <div className={`${styles.deposit}`}>
          <div className={`${styles.deposit__header}`}>
            <h4 className={`${styles.deposit__headerTitle} mb-0`}>
              Fund your account
            </h4>
            <h4 className={`${styles.deposit__headerTitle} mb-0`}>
              Make a deposit and start trading!
            </h4>
            <span
              className={`${styles.deposit__headerIcon}`}
              onClick={handleCloseModal}>
              <FontAwesomeIcon icon={solid("times")} />
            </span>
          </div>
          <div className={`${styles.deposit__body}`}>
            <h2 className={`${styles.deposit__bodyTitle}`}>
              Make a deposit and start trading!
            </h2>
            <figure className={`${styles.deposit__bodyImageWrapper} `}>
              <img src={depositImg} alt='' />
            </figure>
            <p className={`${styles.deposit__bodyDescription} mb-0`}>
              To start trading with leverage and access all the platform's
              features, you will first need to make a deposit to your personal
              Wallet.
            </p>
          </div>
          <div className={styles.deposit__footer}>
            <button className={`${styles.deposit__footerButton}`}>
              Deposit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FundYourAccount;
