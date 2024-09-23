// src/components/ContactList/ContactList.jsx
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import useStore from '../../store'; // Import the Zustand store

export default function ContactList() {
  const contacts = useStore(state => state.contacts.items);
  const filter = useStore(state => state.filters.name);
  const deleteContact = useStore(state => state.contacts.deleteContact);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    deleteContact(contactId);
  };

  return (
    <ul className={css.list}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} onDelete={() => handleDelete(contact.id)} />
          </li>
        ))
      ) : (
        <li className={css.item}>No contacts found</li>
      )}
    </ul>
  );
}
