import { EditContactForm } from 'components/Contact form/EditContactForm';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactRequest } from 'redux/contacts/contactsOperations';
import { AppDispatch } from 'redux/store';
import { IContact} from 'types/types';

export const ContactsItem = ({ id, name, number }:IContact) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li>
      {edit ? (
        <EditContactForm
          id={id}
          name={name}
          number={number}
          setEdit={setEdit}
        />
      ) : (
        <>
          <span>
            {name}: {number}
          </span>
          <button
            type="button"
            className="edit-btn"
            onClick={() => setEdit(true)}
          >
            <span className="material-icons">edit</span>
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => dispatch(deleteContactRequest(id))}
          >
            <span className="material-icons">delete</span>
          </button>
        </>
      )}
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
