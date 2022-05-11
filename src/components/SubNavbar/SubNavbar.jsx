import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "./SubNavbar.module.scss";

function SubNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currActiveLink, setCurrActiveLink] = useState(null);
  const activeLinkDecoration = useRef(null);
  const handleToggleSubNav = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  const activeLinkStyle = ({ isActive }) => {
    return isActive
      ? `${styles.active} ${isCollapsed && styles.isCollapsed}`
      : `${isCollapsed && styles.isCollapsed}`;
  };
  const handleActiveLink = (e) => {
    const currentActiveLink = e.target.closest("li");
    if (!currentActiveLink) return;
    activeLinkDecoration.current.style.width = `${currentActiveLink.offsetWidth}px`;
    activeLinkDecoration.current.style.left = `${currentActiveLink.offsetLeft}px`;
    setCurrActiveLink((prevState) => (prevState = currentActiveLink));
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
    <nav
      className={`${styles.sub__navbar} ${
        !isCollapsed && styles.isCollapsed
      } `}>
      <div className={`${styles.sub__navbarWrapper}`}>
        <ul
          className={`${styles.sub__navbarList} list-unstyled mb-0`}
          onClick={handleActiveLink}>
          <li
            className={`${styles.activeLinkDecoration}`}
            ref={activeLinkDecoration}></li>
          <li>
            <NavLink to='/mainpage/dashboard' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("table-cells-large")} />
              </span>
              <span>Dashboard</span>
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
            <NavLink to='/mainpage/promocodes' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("percent")} />
              </span>
              <span>Promo codes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mainpage/referrals' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("user-group")} />
              </span>
              <span>Referrals</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/mainpage/reports' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("file")} />
              </span>
              <span>Reports</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/mainpage/settings' className={activeLinkStyle}>
              <span>
                <FontAwesomeIcon icon={solid("gear")} />
              </span>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
        <div
          className={`${styles.sub__navbarToggleHide}`}
          onClick={handleToggleSubNav}>
          <button className={`${styles.toggle__hideButton}`}>
            <span className={`${isCollapsed && styles.isCollapsed}`}>
              <FontAwesomeIcon icon={solid("chevron-left")} />
            </span>
            <span className={`${isCollapsed && styles.isCollapsed}`}>
              Hide menu
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar;
