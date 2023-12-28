import { Box, Container, Grid, Typography } from "@mui/material";
import UsersTable from "../components/users-table";
import { UsersProvider } from "../providers/users-context";
import { UserDialog } from "../components/user-dialog";

export default function Users() {
  const sxFullWidth = { width: "100%" };
  const sxFlexBoxAlignCenterJustifyRight = {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    minHeight: "100%",
  };

  return (
    <UsersProvider>
      <Container sx={sxFullWidth}>
        <Box sx={sxFullWidth}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h2">Users</Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={sxFlexBoxAlignCenterJustifyRight}>
                <UserDialog></UserDialog>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <UsersTable></UsersTable>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </UsersProvider>
  );
}
