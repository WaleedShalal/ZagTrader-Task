import { NavLink, Outlet } from "react-router-dom";
import logoImg from "../../images/logo.svg";
import styles from "./WelcomePage.module.scss";

function WelcomePage() {
  return (
    <section className={styles.welcome__page}>
      <div className='container-fluid'>
        <div className={styles.logo}>
          <NavLink to='/'>
            <figure className={`${styles.logo__wrapper} mb-0`}>
              <img src={logoImg} alt='logo' />
            </figure>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export default WelcomePage;
