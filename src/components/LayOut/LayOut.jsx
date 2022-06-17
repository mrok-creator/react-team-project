import { Outlet } from 'react-router-dom';
import Header from "components/Header/Header"
import style from './layOut.module.css';
import Footer from "components/Footer"
const LayOut = () => {
  return (
    <>
      <section className={style.header}>

        <Header />

      </section>
      <Outlet />
      <section className={style.footer}>

        <Footer />

      </section>
    </>
  );
};

export default LayOut;
