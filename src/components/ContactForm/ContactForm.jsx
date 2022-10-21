import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from 'redux/slice/contactsSlice';
import { contactsSelector } from 'redux/selectors/index';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const hendleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        console.log(event.currentTarget.name + ' is not a valid value');
    }
  };

  const hendleSubmitForm = event => {
    event.preventDefault();
    const newContact = { id: nanoid(), name, number };
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
      return formReset();
    }

    dispatch(addContactAction(newContact));
    formReset();
  };
  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={hendleSubmitForm}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={hendleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={hendleChange}
          className={styles.input}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contacts
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  hendleAddContact: PropTypes.func.isRequired,
};
