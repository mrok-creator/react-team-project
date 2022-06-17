import PropTypes from 'prop-types';

import ContactItem from './ContactItem';

import s from './contactsPage.module.css';

const ContactsPage = ({ contacts }) => {
  return (
    <div className={s.contactPage}>
      <div className={s.wrap}></div>
      <div className={s.box}>
        <h1 className={s.title}>Our team</h1>
      </div>
      <ul className={s.list}>
        {contacts.map(item => (
          <ContactItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            descr={item.descr}
            posn={item.posn}
            surename={item.surename}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;

ContactsPage.defaultProps = {
  contacts: [],
};

ContactsPage.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      posn: PropTypes.bool.isRequired,
      descr: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
