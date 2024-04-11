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

  // const ContactSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(3, "Too short!")
  //     .max(50, "Too long!")
  //     .required("Required"),
  //   tel: Yup.string().phone("UA", true).required("Required"),
  // });

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

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        initial={InitialContacts}
        // validation={ContactSchema}
        onAdd={addContact}
      />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContact} onDelete={delContact} />
    </div>
  );
}
