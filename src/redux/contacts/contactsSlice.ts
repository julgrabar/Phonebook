import { createSlice } from '@reduxjs/toolkit';
import { IContactsSliceInit } from 'types/types';
import { addContactRequest, changeContactRequest, deleteContactRequest, fetchContactsNames } from './contactsOperations';


const init: IContactsSliceInit = {
    items:[],
    filter: "",
    isLoading: false
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: init,
  reducers: {
    filterContacts(state, action){
        state.filter=action.payload;
    }
  },
  extraReducers:  builder => {
    builder.addCase(fetchContactsNames.fulfilled, (state, { payload }) => ({
      ...state,
      items:[...payload],
      isLoading: false,
    }))
    .addCase(fetchContactsNames.pending, (state) => ({
      ...state, 
      isLoading: true}))
    .addCase(deleteContactRequest.fulfilled, (state, { payload }) => ({
      ...state,
      items: state.items.filter(item=>item.id!==payload)
    }))
    .addCase(addContactRequest.fulfilled, (state, { payload }) => ({
      ...state,
      items: [...state.items, payload]
    }))
    .addCase(changeContactRequest.fulfilled, (state, { payload }) => ({
      ...state,
      items: state.items.map(item=>item.id===payload.id?payload:item)
    }))
  }
});


export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;