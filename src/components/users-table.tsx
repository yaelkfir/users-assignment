import { useUserContext } from "../providers/users-context";
import { PaginationTable } from "./pagination-table";
import { getUserColumns } from "../utils/user-columns";

export default function UsersTable() {
  const { data, loading, error } = useUserContext();
  const columns = getUserColumns();

  return (
    <PaginationTable
      rows={data}
      columns={columns}
      loading={loading}
      error={error}
    ></PaginationTable>
  );
}
