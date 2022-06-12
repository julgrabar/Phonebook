export interface ISignUpData {
    name: string,
    email: string,
    password: string,
}

export interface ILoginData {
    email: string,
    password: string,
}

export interface IContactFormData {
  name: string,
  number: string,
}

export interface IContact {
  id: string,
  name: string,
  number: string
}

export interface IAuthSliceInit {
  user: {name: string | null, email: string | null },
  token: string | null,
  isLoggedIn: boolean
}

export interface IContactsSliceInit {
  items: IContact[],
  filter: string,
  isLoading: boolean
}

export interface IState{
  contacts: IContactsSliceInit,
  auth: IAuthSliceInit
}