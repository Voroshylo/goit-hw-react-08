import { createSelector } from "@reduxjs/toolkit";
import { selectContact } from "./contactsSlice";
import { selectNameFilter } from "../filters/selectors";

export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
