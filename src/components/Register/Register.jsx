import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import sslImg from "../../images/ssl.svg";
import amazonImg from "../../images/amazon.svg";
import styles from "./Register.module.scss";

function Register() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/mainpage/dashboard");
  };
  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
      userAcceptPolicy: "",
    },
    validationSchema: yup.object({
      userEmail: yup
        .string()
        .email("Enter correct email")
        .required("Email is required"),
      userPassword: yup
        .string()
        .required("Password is required")
        .matches(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
          "Password must contain: 8 symbols, 1 upper-case, 1 lower-case and 1 digit",
        ),
      userAcceptPolicy: yup.boolean().required(),
    }),
  });
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordShow = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <section className={`${styles.register__form}`}>
      <form onSubmit={formik.handleSubmit}>
        <h5 className='text-center text-capitalize text-white mb-0'>
          register
        </h5>
        <h6 className='text-center'>
          Already have an account?{" "}
          <NavLink
            to='/sign-in'
            className={`${styles.form__option} text-capitalize`}>
            Log in
          </NavLink>
        </h6>
        <div className={styles.form__inputWrapper}>
          <input
            id='input__email'
            className={`${styles.input__fieldEmail} ${
              formik.touched.userEmail &&
              formik.errors.userEmail &&
              styles.isRequired
            }`}
            type='email'
            autoComplete='off'
            placeholder=' '
            name='userEmail'
            {...formik.getFieldProps("userEmail")}
          />
          <label
            htmlFor='input__email'
            className={`${
              formik.touched.userEmail &&
              formik.errors.userEmail &&
              styles.isRequired
            } text-capitalize`}>
            email *
          </label>
          {formik.touched.userEmail && formik.errors.userEmail && (
            <div className={styles.form__error}>{formik.errors.userEmail}</div>
          )}
        </div>
        <div className={styles.form__inputWrapper}>
          <input
            id='input__password'
            className={`${styles.input__fieldPassword} ${
              formik.touched.userPassword &&
              formik.errors.userPassword &&
              styles.isRequired
            }`}
            type={`${showPassword ? "text" : "password"}`}
            autoComplete='off'
            placeholder=' '
            name='userPassword'
            {...formik.getFieldProps("userPassword")}
          />
          <label
            htmlFor='input__password'
            className={`${
              formik.touched.userPassword &&
              formik.errors.userPassword &&
              styles.isRequired
            } text-capitalize`}>
            password *
          </label>
          <span
            className={`${styles.password__showIcon} ${
              !showPassword && styles.notActive
            }  text-capitalize text-white`}
            onClick={handlePasswordShow}>
            <FontAwesomeIcon icon={regular("eye")} />
          </span>
          {formik.touched.userPassword && formik.errors.userPassword && (
            <div className={styles.form__error}>
              {formik.errors.userPassword}
            </div>
          )}
        </div>
        <div className={`${styles.form__inputCheckWrapper} d-flex`}>
          <input
            className={`${
              formik.values.userAcceptPolicy === false && styles.isRequired
            }`}
            id='input__registerCheckbox'
            type='checkbox'
            name='userAcceptPolicy'
            defaultChecked={formik.values.userAcceptPolicy}
            {...formik.getFieldProps("userAcceptPolicy")}
          />
          <label htmlFor='input__registerCheckbox'>
            I accept the <span> Terms of Conditions</span> and{" "}
            <span> Privacy Policy</span>
          </label>
        </div>
        <button
          className={`${styles.form__submitButton}`}
          onClick={handleNavigate}
          disabled={
            Object.keys(formik.errors).length || !formik.values.userAcceptPolicy
              ? true
              : false
          }>
          Register
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

export default Register;
