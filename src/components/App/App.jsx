import React, { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const hendleAddContact = contact => {
    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    setContacts(prev => [...prev, contact]);
  };

  const hendleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const hendleDeleteCard = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const optimizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(optimizedFilter)
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h1>Phonebook</h1>
        <ContactForm hendleAddContact={hendleAddContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={hendleFilter} />

        <Contacts
          contacts={filteredContacts}
          handleDeleteCard={hendleDeleteCard}
        />
      </div>
    </div>
  );
};
