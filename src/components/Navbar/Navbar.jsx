import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import logoImg from "../../images/logo-mobile.svg";
import styles from "./Navbar.module.scss";

function Navbar() {
  const defaultActiveLink = useRef(null);
  const activeLinkDecoration = useRef(null);
  const [currActiveLink, setCurrActiveLink] = useState();
  const testRef = useRef(null);
  useEffect(() => {
    setCurrActiveLink(
      (prevState) => (prevState = defaultActiveLink.current.closest("li")),
    );
  }, []);

  const activeLinkStyle = ({ isActive }) => {
    return isActive ? `${styles.active}` : undefined;
  };

  const handleActiveLink = (e) => {
    const currentActiveLink = e.target.closest("li");
    if (!currentActiveLink) return;
    activeLinkDecoration.current.style.width = `${currentActiveLink.offsetWidth}px`;
    activeLinkDecoration.current.style.left = `${currentActiveLink.offsetLeft}px`;
    setCurrActiveLink((prevState) => (prevState = currentActiveLink));

    // const clickedArea = currentActiveLink.getBoundingClientRect();
    // testRef.current.style.transformOrigin = `${clickedArea.x}px ${clickedArea.y}px`;
    // console.log(clickedArea);
    // testRef.current.classList.add(`${styles.active}`);
    // setTimeout(function () {
    //   testRef.current.classList.remove(`${styles.active}`);
    // }, 1000);
  };

  useEffect(() => {
    if (!currActiveLink) return;
    function handleActiveLinkResize() {
      activeLinkDecoration.current.style.width = `${currActiveLink.offsetWidth}px`;
      activeLinkDecoration.current.style.left = `${currActiveLink.offsetLeft}px`;
    }
    handleActiveLinkResize();
    window.addEventListener("resize", handleActiveLinkResize);
    return () => window.removeEventListener("resize", handleActiveLinkResize);
  }, [currActiveLink]);

  return (
    <div className={`${styles.main__navbar}`}>
      <div className={styles.logo__shortHandWrapper}>
        <Link to='/mainpage/dashboard' className={`${styles.logo__link}`}>
          <figure className={`${styles.logo__wrapper} mb-0`}>
            <img src={logoImg} alt='logo' />
          </figure>
        </Link>
        <div className={`${styles.shorthand}`}>
          <div className={`${styles.shorthand__caption}`}>
            <span>BTC/USD</span>
          </div>
          <div className={`${styles.shorthand__value}`}>
            <span>38,657.14</span>
            <span>+2.79%</span>
          </div>
        </div>
      </div>
      <nav className={`${styles.nav__responsiveWrapper}`}>
        <ul
          className={`${styles.nav__mainItemsList} list-unstyled mb-0`}
          onClick={handleActiveLink}>
          <li
            className={`${styles.activeLinkDecoration}`}
            ref={activeLinkDecoration}></li>
          <li>
            <NavLink
              to='/mainpage/dashboard'
              className={activeLinkStyle}
              ref={defaultActiveLink}>
              <span>
                <FontAwesomeIcon icon={solid("house")} />
              </span>
              <span>Main</span>
              <div className={`${styles.test}`} ref={testRef}></div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mainpage/margin' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("chart-simple")} />
              </span>
              <span>Margin</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mainpage/buycrypto' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("coins")} />
              </span>
              <span>Buy crypto</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mainpage/copytrading' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("money-bill-trend-up")} />
              </span>
              <span>Copy-trading</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mainpage/yield' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("arrow-up-right-dots")} />
              </span>
              <span>Yield</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/mainpage/contests'
              className={`${styles.contests__Link} ${activeLinkStyle}`}>
              <span>
                <FontAwesomeIcon icon={solid("trophy")} />
              </span>
              <span>Contests</span>
            </NavLink>
            <span className={`${styles.contests__hot}`}>Hot!</span>
          </li>
        </ul>
        <div className={`${styles.nav__subItemsListIcon}`}>
          <span>
            <FontAwesomeIcon icon={solid("bars")} />
          </span>
          <span className='d-block d-lg-none'>More</span>
        </div>
        <div className={`${styles.nav__subItemsListWrapper}`}>
          <div>
            <span>
              <FontAwesomeIcon icon={solid("user")} />
            </span>
            <span>waleed.abdoshalal@gmail.com</span>
          </div>
          <ul className={`${styles.nav__subItemsList} list-unstyled mb-0`}>
            <li>
              <Link to='/mainpage/dashboard'>
                <span>
                  <FontAwesomeIcon icon={solid("diagram-project")} />
                </span>
                <span>Analysis</span>
              </Link>
            </li>
            <li>
              <Link to='/mainpage/dashboard'>
                <span>
                  <FontAwesomeIcon icon={regular("circle-play")} />
                </span>
                <span>Tutorials</span>
              </Link>
            </li>
            <li>
              <Link to='/mainpage/dashboard'>
                <span>
                  <FontAwesomeIcon icon={regular("circle-question")} />
                </span>
                <span>Help Center</span>
              </Link>
            </li>
            <li>
              <Link to='/mainpage/dashboard'>
                <span>
                  <FontAwesomeIcon icon={solid("comment-dots")} />
                </span>
                <span>Chat</span>
              </Link>
            </li>
            <li>
              <Link to='/mainpage/dashboard'>
                <span>
                  <FontAwesomeIcon icon={solid("thumbs-up")} />
                </span>
                <span>Feedback</span>
              </Link>
            </li>
            <li>
              <Link to='/mainpage/dashboard'>
                <span>
                  <FontAwesomeIcon icon={solid("gear")} />
                </span>
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to='/mainpage/dashboard'>
                <span>
                  <FontAwesomeIcon icon={solid("arrow-right-from-bracket")} />
                </span>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
