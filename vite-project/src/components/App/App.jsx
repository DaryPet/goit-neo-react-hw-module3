import { useState } from "react";
import "./App.css";
import { Formik } from "formik";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import InitialContacts from "../contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(InitialContacts);
  const [filter, setFilter] = useState("");

  const VisibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={VisibleContact} />
    </div>
  );
}
