import { EditContactForm } from 'components/Contact form/EditContactForm';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactRequest } from 'redux/contacts/contactsOperations';

export const ContactsItem = ({ id, name, number }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

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
