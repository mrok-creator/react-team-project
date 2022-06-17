import data from './dataContacts.json';

import s from './contactsPage.module.css';

function ContactsPage() {
  const contactItem = data.map(
    ({ id, avatar, name, surename, posn, descr }) => {
      return (
        <li key={id} className={s.card}>
          <div className={s.imgWrap}>
            <img src={avatar} alt="" className={s.img} />
            <p className={s.description}>{descr}</p>
          </div>
          <div className={s.descriptionContainer}>
            <h2 className={s.name}>
              {name} <br /> {surename}
            </h2>
            <p className={s.position}>{posn}</p>
          </div>
        </li>
      );
    }
  );

  return (
    <div className={s.contactPage}>
      <div className={s.wrap}></div>
      <div className={s.box}>
        <h1 className={s.title}>Our team</h1>
      </div>
      <ul className={s.list}>{contactItem}</ul>
    </div>
  );
}

export default ContactsPage;
