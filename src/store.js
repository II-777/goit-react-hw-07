// src/store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  contacts: {
    items: [],
    addContact: (contact) => {
      set((state) => ({
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, contact],
        },
      }));
      console.log('INFO Adding contact:', { ...contact });
    },
    deleteContact: (contactId) => {
      set((state) => {
        const contactToDelete = state.contacts.items.find(contact => contact.id === contactId);
        console.log('INFO Deleting contact:', contactToDelete ? { ...contactToDelete } : 'Contact not found');
        return {
          contacts: {
            ...state.contacts,
            items: state.contacts.items.filter(contact => contact.id !== contactId),
          },
        };
      });
    },
  },
  filters: {
    name: '',
    changeFilter: (name) => set((state) => ({
      filters: {
        ...state.filters,
        name,
      },
    })),
  },
}));

export default useStore;
