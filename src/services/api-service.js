import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

export const fetchContacts = async ()=>{
    const response = await axios.get("/contacts");
    return response.data;
}

export const deleteContact = async (id) => {
    const response = await axios.delete(`contacts/${id}`);
    return response.data
}

export const addContact = async (contact) => {
    const response = await axios.post(`contacts/`, contact);
    return response.data
}

export const register = async (user) => {
    const response = await axios.post("users/signup", user)
    return response.data
}

export const login = async (user) => {
    const response = await axios.post("users/login", user)
    return response.data
}

export const logout = async (user) => {
    const response = await axios.post("users/logout", user)
    return response.data
}

export const fetchCurrentUser = async (user) => {
    const response = await axios.get("users/current", user)
    return response.data
}

export const changeContact = async ({id,number,name}) => {
    const response = await axios.patch(`contacts/${id}`, {name,number})
    return response.data
}