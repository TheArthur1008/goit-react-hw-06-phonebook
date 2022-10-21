import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { filterSelector } from 'redux/selectors/index';
import { contactsSelector } from 'redux/selectors/index';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from './App.module.css';

export const App = () => {
  const { contacts } = useSelector(contactsSelector);
  const { filter } = useSelector(filterSelector);

  const hendleAddContact = contact => {
    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
  };

  const filteredContacts = useMemo(() => {
    return contacts.length
      ? contacts.filter(({ name }) => {
          return name.toLowerCase().includes(filter.toLowerCase());
        })
      : [];
  }, [contacts, filter]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h1>Phonebook</h1>
        <ContactForm hendleAddContact={hendleAddContact} />

        {!!contacts.length && (
          <>
            <h2>Contacts</h2>
            <Filter />

            <ContactsList contacts={filteredContacts} />
          </>
        )}
      </div>
    </div>
  );
};
