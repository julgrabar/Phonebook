import { ContactsItem } from 'components/Contact item/ContactsItem';
import React from 'react';
import { List } from './ContactsList.styled';
import { IContact } from 'types/types';

interface IProps {
  contacts: IContact[]
}

export const ContactList = ({ contacts }: IProps) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
