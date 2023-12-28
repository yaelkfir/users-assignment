import { ReactNode } from 'react';

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export type Users = User[];

export interface UserContextModel {
    data: Users;
    error: any;
    loading: boolean;
    deleteUser: (user: User) => any;
    addUser: (user: User) => any

}

export interface ColumnModel {
    id: string;
    name: string;
    template: (user: User) => ReactNode;
}

export interface FormFieldModel {
    field: string;
    label: string;
    placeholder: string;
    type: string;
    validators?: any;
    helperText?: string;
}

export type AlertErrorProps = { msg: string };
export type DeleteUserProps = { user: User };
export type UserFormProps = {
    submit: (value: Partial<User>) => void;
    cancel: () => void;
};

export type PaginationTablerProps = {
    rows: any[];
    columns: ColumnModel[];
    loading: boolean;
    error: string;
};
