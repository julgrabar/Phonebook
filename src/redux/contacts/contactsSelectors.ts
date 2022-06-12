import { IState} from 'types/types';

export const getContacts = (state: IState) => state.contacts.items;
export const getIsLoading = (state: IState) => state.contacts.isLoading;
export const getFilterValue = (state: IState) => state.contacts.filter;