import { ContactForm } from 'components/Contact form/ContactForm';
import { ContactList } from 'components/Contact list/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/Global';
import { Loader } from 'components/Loader/Loader.stayled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsNames } from 'redux/contacts/contactsOperations';
import {
  getFilterValue,
  getContacts,
  getIsLoading,
} from 'redux/contacts/contactsSelectors';

export const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsNames());
  }, [dispatch]);

  const findPhones = () => {
    const normalizedValue = filterValue.toLowerCase();
    const filteredArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
    return filteredArray;
  };

  return (
    <Container>
      <ContactForm />

      {contacts && contacts.length > 0 && (
        <>
          <Filter />
          <ContactList contacts={findPhones()} />
        </>
      )}
      {/* {error && <p>Ooops.. Something went wrong... Try to reload the page</p>} */}
      {isLoading && <Loader />}
    </Container>
  );
};
