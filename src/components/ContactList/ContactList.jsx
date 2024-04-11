import Contacts from "../Contacts/Contacts.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contacts data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
