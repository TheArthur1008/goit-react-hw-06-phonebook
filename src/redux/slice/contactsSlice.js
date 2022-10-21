import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactAction(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContactAction(state, action) {
      const newContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.contacts = newContacts;
    },
  },

  //
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export default contactsSlice.reducer;
