import { Outlet } from 'react-router-dom';

import style from './layOut.module.css';

const LayOut = () => {
  return (
    <>
      <section className={style.header}>
        {/* 
       <Header/>
         */}
      </section>
      <Outlet />
      <section className={style.footer}>
        {/* 
        <Footer/>
        */}
      </section>
    </>
  );
};

export default LayOut;
