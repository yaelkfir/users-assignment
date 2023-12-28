import { ErrorMsg } from './error-msg';
import { User } from './models';

export const url = 'https://jsonplaceholder.typicode.com/users';

export const postUserRequest = {
    url,
    errMsg: ErrorMsg.postUserRequest,
    config: (user: User) => ({
        method: 'POST',
        body: JSON.stringify({ user }),
    }),
};

export const deleteUserRequest = {
    url,
    errMsg: ErrorMsg.deleteUserRequest,
    config: () => ({
        method: 'DELETE',
    }),
};

export const getUsersRequest = {
    url,
    errMsg: ErrorMsg.getUsersRequest,
    config: () => ({
        method: 'GET',
    }),
    
};
