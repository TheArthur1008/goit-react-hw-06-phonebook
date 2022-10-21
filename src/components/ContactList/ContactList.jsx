import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import styles from './ContactList.module.css';

export const Contacts = ({ handleDeleteCard, contacts }) => {
  return (
    <ul className={styles.item}>
      {contacts.map(i => {
        return (
          <li key={i.id} className={styles.list}>
            {i.name}: {i.number}{' '}
            <Button handleDeleteCard={() => handleDeleteCard(i.id)} />
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  handleDeleteCard: PropTypes.func,
};
