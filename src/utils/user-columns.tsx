import { ColumnModel, User } from "./models";
import { DeleteUser } from "../components/delete-user";

const deleteTemplate = (user: User) => <DeleteUser user={user} />;

export const getUserColumns = (): ColumnModel[] => [
  {
    id: "name",
    name: "Name",
    template: (user: User) => <span>{user.name}</span>,
  },
  {
    id: "email",
    name: "Email",
    template: (user: User) => <span>{user.email}</span>,
  },
  {
    id: "phone",
    name: "Phone",
    template: (user: User) => <span>{user.phone}</span>,
  },
  {
    id: "delete",
    name: "",
    template: (user: User) => deleteTemplate(user),
  },
];
