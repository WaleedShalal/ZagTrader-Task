import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import sslImg from "../../images/ssl.svg";
import amazonImg from "../../images/amazon.svg";
import styles from "./Login.module.scss";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, SetLoginError] = useState("");
  const handlePasswordShow = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputsValue = [...e.target];
    if (!inputsValue[0].value || !inputsValue[1].value) {
      SetLoginError("Wrong email or password!");
    } else {
      SetLoginError("");
    }
  };
  return (
    <section className={`${styles.login__form}`}>
      <form onSubmit={handleSubmit}>
        <h5 className='text-center text-capitalize text-white mb-0'>login</h5>
        <h6 className='text-center'>
          New to PrimeXBT?{" "}
          <NavLink
            to='/register'
            className={`${styles.form__option} text-capitalize`}>
            register
          </NavLink>
        </h6>
        <div className={styles.form__inputWrapper}>
          <input
            id='input__email'
            className={styles.input__fieldEmail}
            type='email'
            autoComplete='off'
            placeholder=' '
          />
          <label htmlFor='input__email' className={`text-capitalize`}>
            email
          </label>
        </div>
        <div className={styles.form__inputWrapper}>
          <input
            id='input__password'
            className={styles.input__fieldPassword}
            type={`${showPassword ? "text" : "password"}`}
            autoComplete='off'
            placeholder=' '
          />
          <label htmlFor='input__password' className={`text-capitalize`}>
            password
          </label>
          <span
            className={`${styles.password__showIcon} ${
              !showPassword && styles.notActive
            }  text-capitalize text-white`}
            onClick={handlePasswordShow}>
            <FontAwesomeIcon icon={regular("eye")} />
          </span>
        </div>
        {loginError && (
          <div className={`${styles.login__error}`}>{loginError}</div>
        )}
        <div className={`${styles.forgotPassword}`}>
          <NavLink to='/' className={`${styles.forgotPasswordLink}`}>
            Forgot password?
          </NavLink>
        </div>
        <button className={`${styles.form__submitButton} text-white`}>
          Log in
        </button>
        <div className={`${styles.securityNote} justify-content-center`}>
          <span>
            <FontAwesomeIcon icon={solid("lock")} />
          </span>
          <div>We take the protection of your data seriously</div>
        </div>
      </form>
      <div className={`${styles.footerImages}`}>
        <figure className='mb-0'>
          <img src={sslImg} alt='ssl secured' />
        </figure>
        <figure className='mb-0'>
          <img src={amazonImg} alt='amazon wev services' />
        </figure>
        <span>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 32'>
            <path d='M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z'></path>
          </svg>
        </span>
      </div>
    </section>
  );
}

export default Login;
