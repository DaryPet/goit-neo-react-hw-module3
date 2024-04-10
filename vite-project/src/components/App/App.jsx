import { useState, useEffect } from "react";
import "./App.css";
import * as Yup from "yup";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import InitialContacts from "../contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(InitialContacts);
  const [filter, setFilter] = useState("");

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  // const handleChange (event) => {
  // setContacts(event.target.value)

  // const arrContacts = contacts.filter((elem) => {
  //   const contactName = elem.name.toLocaleLowerCase();
  //   return contactName.includes(inputValue.toLowerCase());
  // });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm initial={InitialContacts} onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} onDelete={delContact} />
    </div>
  );
}
