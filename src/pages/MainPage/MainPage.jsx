import { useContext, useEffect } from "react";
import { UserLoginContext } from "../../components/Context/UserLogin";
import { Outlet } from "react-router-dom";
import FundYourAccount from "../../components/FundYourAccount/FundYourAccount";
import Navbar from "./../../components/Navbar/Navbar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import styles from "./MainPage.module.scss";

function MainPage() {
  const { isJustLogged, setIsJustLogged } = useContext(UserLoginContext);
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("justLogged"))) return;
    setTimeout(
      setIsJustLogged(true),
      sessionStorage.setItem("justLogged", JSON.stringify(isJustLogged)),
      1500,
    );
  }, [isJustLogged, setIsJustLogged]);

  useEffect(() => {
    if (!isJustLogged) return;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [isJustLogged]);

  return (
    <>
      {isJustLogged && <FundYourAccount />}
      <main className={styles.main__page}>
        <Navbar />
        <div className={styles.main__pageWrapper}>
          <div className={styles.page__subNavWrapper}>
            <SubNavbar />
          </div>
          <div className={styles.page__sectionsWrapper}>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
