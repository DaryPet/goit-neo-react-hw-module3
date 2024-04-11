import { useState, useEffect } from "react";
import "./App.css";
// import * as Yup from "yup";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import InitialContacts from "../contacts.json";
import { nanoid } from "nanoid";

export default function App() {
  // const [contacts, setContacts] = useState(InitialContacts);
  const [contacts, setContacts] = useState((InitialContacts) => {
    const savedContact = window.localStorage.getItem("saved-contacts");
    if (savedContact !== null) {
      return JSON.parse(savedContact);
    }
    return contacts;
  });

  const [filter, setFilter] = useState("");

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm initial={InitialContacts} onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} onDelete={delContact} />
    </div>
  );
}
