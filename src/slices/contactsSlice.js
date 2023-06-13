import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from "uuid";

const initialState = {
  contacts: [
    {
      name: "Sandra",
      phone: "0253456777",
      location: "central Park nw",
      id: uuid()
    },
    {
      name: "Alexander",
      phone: "004565998998",
      location: "bridge knot street  20",
      id: uuid()
    }
  ]
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
    editContact: (state, action) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
    }
  }
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
