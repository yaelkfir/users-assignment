import { createContext, useContext } from 'react';
import { User, UserContextModel, Users } from '../utils/models';
import useFetchEffect from '../hooks/useFetchEffect';
import { deleteUserRequest, getUsersRequest } from '../utils/user-api';
import { ErrorMsg } from '../utils/error-msg';

const initialUserContext: UserContextModel = {
    data: [] as Users,
    error: '',
    loading: false,
    deleteUser: () => null,
    addUser: () => null,
};

export const UsersContext = createContext({
    ...initialUserContext,
});

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
    const spliceUserById = (id: number) => {
        const index = data.findIndex((user: User) => user.id === id);
        if (index === -1) {
            setError('Fail delete user');
            return data;
        }
        const next = [...data];
        next.splice(index, 1);
        return next;
    };
    const addUser = (user: User) => {
        setData([{ user, id: data.length }, ...data]);
    };

    const deleteUser = async (user: User) => {
        setError('');
        setLoading(true);
        const id = user.id;
        const res = await fetch(deleteUserRequest.url + '/' + id);
        if (res.ok) {
            const next = spliceUserById(id);
            setData(next);
            setLoading(false);
        } else {
            setLoading(false);
            setError(ErrorMsg.deleteUserRequest);
        }
    };

    const { data, error, loading, setData, setLoading, setError } = useFetchEffect(getUsersRequest.url, ErrorMsg.getUsersRequest);

    const users: UserContextModel = {
        ...initialUserContext,
        data,
        error,
        loading,
        deleteUser,
        addUser,
    };

    return <UsersContext.Provider value={users}>{children}</UsersContext.Provider>;
};

export function useUserContext() {
    return useContext(UsersContext);
}
