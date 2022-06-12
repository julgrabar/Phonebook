import { IState} from 'types/types';

export const getUser =(state: IState) => state.auth.user;
export const getIsLogged = (state: IState) => state.auth.isLoggedIn;
export const getToken = (state: IState) => state.auth.token;

