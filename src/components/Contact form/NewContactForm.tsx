import { Formik, Field, FormikHelpers } from 'formik';
import { StyledForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactRequest } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';
import React from 'react';
import { AppDispatch } from 'redux/store';
import { IContact, IContactFormData } from 'types/types';


export const NewContactForm = () => {
  const contacts: IContact[] = useSelector(getContacts);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values:IContactFormData, { resetForm }:FormikHelpers<IContactFormData>) => {
    addNewContact(values);
    resetForm();
  };

  const addNewContact = ({ name, number }:IContactFormData) => {
    if (
      contacts.map(item => item.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      alert(`${name} is Already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest(contact));
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <StyledForm>
        <label>
          <p>Name</p>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <p>Number</p>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
