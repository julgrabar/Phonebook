import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { fetchContacts, deleteContact, addContact, changeContact } from "services/api-service";


export const fetchContactsNames = createAsyncThunk("contacts/fetchContacts", 
async (_, {rejectWithValue})=>{
    try{
        const contacts = await fetchContacts();
        return contacts
    } catch (error){
        toast.error("Error of loading contacts")
        return rejectWithValue(error)
    }
}
)

export const deleteContactRequest = createAsyncThunk("contacts/deleteContact",
async (id, {rejectWithValue})=>{
    try{
        await deleteContact(id);
        return id;
    }catch(error){
        toast.error("Contact has not been deleted")
        return rejectWithValue(error)
    }
}
) 

export const addContactRequest = createAsyncThunk("contacts/addContact",
async (contact, {rejectWithValue})=>{
    try{
        const response = await addContact(contact)
          toast.success("Contact has been added")
        return response;
    }catch(error){
          toast.error("Contact has not been added. Try to reload the page.")
        return rejectWithValue(error)
    }
}
) 

export const changeContactRequest = createAsyncThunk(
    "contacts/changeContact",
    async (contact, {rejectWithValue}) => {
        try {
            const response = await changeContact(contact)
             toast.success("Contact has been changed")
             return response;
             
        } catch (error) {
            toast.error("Contact has not been changed. Try to reload the page.")
            console.log(error)
        }

    }
)