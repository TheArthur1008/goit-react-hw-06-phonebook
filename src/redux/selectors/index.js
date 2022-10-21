import { createSelector } from 'reselect';

export const filterSelector = createSelector(
  state => state.filter,
  filterSlice => filterSlice
);

export const contactsSelector = createSelector(
  state => state.contacts,
  contactsSlice => contactsSlice
);
