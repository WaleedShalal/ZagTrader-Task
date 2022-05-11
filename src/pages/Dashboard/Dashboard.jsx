import TotalFunds from "../../components/TotalFunds/TotalFunds";
import Wallets from "../../components/Wallets/Wallets";
import Contests from "../../components/Contests/Contests";
import YieldAccounts from "../../components/YieldAccounts/YieldAccounts";
import CopyTradingPortfolio from "../../components/CopyTradingPortfolio/CopyTradingPortfolio";
import CopyTradingStrategies from "../../components/CopyTradingStrategies/CopyTradingStrategies";
import MarginTrading from "../../components/MarginTrading/MarginTrading";
import CopyTradingTop from "../../components/CopyTradingTop/CopyTradingTop";
import Slider from "../../components/Carousel/Slider/Slider";
import styles from "./Dashboard.module.scss";
function Dashboard() {
  return (
    <>
      <div className={styles.page__sectionsHeader}>
        <TotalFunds />
        <Slider />
      </div>
      <div className={styles.page__sectionsBody}>
        <Wallets />
        <MarginTrading />
        <YieldAccounts />
        <CopyTradingTop />
        <CopyTradingPortfolio />
        <CopyTradingStrategies />
        <Contests />
      </div>
    </>
  );
}

export default Dashboard;
