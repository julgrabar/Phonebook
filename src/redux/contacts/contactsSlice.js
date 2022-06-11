import { createSlice } from '@reduxjs/toolkit';
import { changeContact } from 'services/api-service';
import { addContactRequest, changeContactRequest, deleteContactRequest, fetchContactsNames } from './contactsOperations';

const init = {
    items: [],
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
  extraReducers: {
    [fetchContactsNames.fulfilled]: (state, {payload})=>({...state, items: [...payload], isLoading: false}), 
    [fetchContactsNames.pending]: (state)=>({...state, isLoading: true}),
    [deleteContactRequest.fulfilled]: (state, action)=>({...state, items: state.items.filter(item=>item.id!==action.payload)}),
    [addContactRequest.fulfilled]: (state, {payload})=>({...state, items: [...state.items, payload]}), 
    [changeContactRequest.fulfilled]: (state, {payload})=>({...state, items:state.items.map(item=>item.id===payload.id?payload:item)})
  },
});


export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;