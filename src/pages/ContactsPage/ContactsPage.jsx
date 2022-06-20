import Wikipedia from './Socials/SocialLogo/Wikipedia';
import Instagram from './Socials/SocialLogo/Instagram';
import Github from './Socials/SocialLogo/Github';

import data from './dataContacts.json';

import s from './contactsPage.module.css';

function ContactsPage() {
  const contactItem = data.map(
    ({ id, avatar, name, surename, posn, descr, instagram, github, wiki }) => {
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
            <ul className={s.IconList}>
              <li className={s.item}>
                <a rel="noopener noreferrer" target="_blank" href={instagram}>
                  <Instagram
                    className={s.icon}
                    width="17"
                    height="17"
                    fill="black"
                  />
                </a>
              </li>
              <li className={s.item}>
                <a rel="noopener noreferrer" target="_blank" href={wiki}>
                  <Wikipedia
                    className={s.icon}
                    width="17"
                    height="17"
                    fill="black"
                  />
                </a>
              </li>
              <li className={s.item}>
                <a rel="noopener noreferrer" target="_blank" href={github}>
                  <Github
                    className={s.icon}
                    width="17"
                    height="17"
                    fill="black"
                  />
                </a>
              </li>
            </ul>
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
