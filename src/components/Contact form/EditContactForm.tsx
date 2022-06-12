import { Formik, Field} from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeContactRequest } from 'redux/contacts/contactsOperations';
import { AppDispatch } from 'redux/store';
import { EditForm } from './ContactForm.styled';
import { IContactFormData } from 'types/types';

interface IProps {
  id: string,
  name: string,
  number: string,
  setEdit: (isEdit: boolean)=> void
}


export const EditContactForm = ({ id, name, number, setEdit }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: IContactFormData = {
    name,
    number,
  };

  const handleSubmit = ({ name, number }: IContactFormData) => {
    const contact = {
      id,
      name,
      number,
    };

    dispatch(changeContactRequest(contact));
    setEdit(false);
  };


  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <EditForm>
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
        <button type="submit" className="submit-btn">
          Edit contact
        </button>
        <button
          type="button"
          className="close-btn"
          onClick={() => setEdit(false)}
        >
          X
        </button>
      </EditForm>
    </Formik>
  );
};
