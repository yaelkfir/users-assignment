import {
  Box,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import { AlertError } from "./alert-error";
import { PaginationTablerProps } from "../utils/models";

export const PaginationTable = ({
  rows,
  columns,
  loading,
  error,
}: PaginationTablerProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sliceDataByPagination = (rows: any[]) => {
    const start = page * rowsPerPage;
    const end = page * rowsPerPage + rowsPerPage;
    return rows?.slice(start, end);
  };

  const getTableCell = (row: any, column: any, index: number) => {
    return <TableCell key={column.id}>{column.template(row, index)}</TableCell>;
  };
  const slicedRows = sliceDataByPagination(rows);
  const mappedRows = slicedRows?.map((row: any, index: number) => {
    return (
      <TableRow key={row.name + index}>
        {columns.map((column: any) => getTableCell(row, column, index))}
      </TableRow>
    );
  });

  const tableHeader = (
    <TableHead>
      <TableRow>
        {columns.map((column: any, i: number) => (
          <TableCell key={i} style={{ minWidth: column.minWidth }}>
            {column.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : null}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          {tableHeader}
          <TableBody>{mappedRows}</TableBody>
        </Table>
      </TableContainer>
      {error ? <AlertError msg={error} /> : null}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
