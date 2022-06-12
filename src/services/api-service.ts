import axios from "axios";
import { IContactFormData, IContact, ISignUpData, ILoginData } from "types/types";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

export const fetchContacts = async ()=>{
    const response = await axios.get("/contacts");
    return response.data;
}

export const deleteContact = async (id:string) => {
    const response = await axios.delete(`contacts/${id}`);
    return response.data
}

export const addContact = async (contact:IContactFormData) => {
    const response = await axios.post(`contacts/`, contact);
    return response.data
}

export const register = async (user: ISignUpData) => {
    const response = await axios.post("users/signup", user)
    return response.data
}

export const login = async (user:ILoginData) => {
    const response = await axios.post("users/login", user)
    return response.data
}

export const logout = async () => {
    const response = await axios.post("users/logout")
    return response.data
}

export const fetchCurrentUser = async () => {
    const response = await axios.get("users/current")
    return response.data
}

export const changeContact = async ({id,number,name}:IContact) => {
    const response = await axios.patch(`contacts/${id}`, {name,number})
    return response.data
}