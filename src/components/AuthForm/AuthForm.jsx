import { useState } from 'react';

import { initialState } from './initialState';
import s from './authForm.module.css';
import google from '../../images/google.png';

const AuthForm = ({ register, login }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickSignIn = e => {
    login({ ...form });
    setForm({ ...initialState });
  };
  const onClickSignUp = e => {
    register({ ...form });
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>You can use your Google Account to authorize:</h2>
      <div className={s.imgWrap}>
        <img className={s.img} src={google} alt="" />
      </div>
      <h2 className={s.title}>
        Or login to our app using e-mail and password:
      </h2>
      <form action="" className={s.form}>
        <div className={s.wrapInput}>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="E-mail"
            className={s.input}
            value={email}
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className={s.input}
            value={password}
          />
        </div>
        <div className={s.wrapButton}>
          {/* тута будуть компоненты button */}
          <button
            className={s.buttonSignIn}
            onClick={onClickSignIn}
            type="button"
          >
            SIGN IN
          </button>
          <button
            className={s.buttonSignUp}
            onClick={onClickSignUp}
            type="button"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};
export default AuthForm;
