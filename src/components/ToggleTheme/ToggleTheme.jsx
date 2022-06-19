import useLocalStorage from 'use-local-storage';

import { ReactComponent as Sun } from '../../shared/images/svg/toggleTheme/sun.svg';
import { ReactComponent as Moon } from '../../shared/images/svg/toggleTheme/moon.svg';

import s from './toggleTheme.module.css';

const ToggleTheme = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  document.body.setAttribute('data-theme', theme);

  return (
    <>
      <button className={s.btn} type="button" onClick={switchTheme}>
        <Sun className={`${s.sun} ${s.icon}`} />
        <Moon className={`${s.moon} ${s.icon}`} />
      </button>
    </>
  );
};
export default ToggleTheme;
