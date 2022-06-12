import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { getFilterValue } from 'redux/contacts/contactsSelectors';
import React, { ChangeEvent } from 'react';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const onFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <>
      <p>Find contacts by name:</p>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterInput}
        className="filter"
      />
    </>
  );
};
