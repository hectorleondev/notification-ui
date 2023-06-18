import { ThemeProvider } from "@emotion/react"
import { useHome } from "../../hooks/home/use_home"
import { Alert, Box, Button, CircularProgress, Container, CssBaseline, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, createTheme } from "@mui/material";
import { AddDialog } from "./add_dialog";

const theme = createTheme();

export const Home = () => {
    const {
        loading,
        errorMessage,
        categoryList,
        logList,
        handleClickOpenAddDialog,
        handleCloseAddDialog,
        onAfterAdd,
        openAddDialog
    } = useHome()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {loading && (<CircularProgress />)}

                    {errorMessage !== "" && (
                        <Alert variant="filled" severity="error">
                            {errorMessage}
                        </Alert>
                    )}

                    {!loading && errorMessage === "" && (
                        <>
                            <Grid container spacing={2} sx={{marginTop: "10px", marginBottom: "10px"}}>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="success" onClick={handleClickOpenAddDialog}>New Notification</Button>
                                </Grid>
                            </Grid>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Phone Number</TableCell>
                                            <TableCell>Category</TableCell>
                                            <TableCell>Channel</TableCell>
                                            <TableCell>Message</TableCell>
                                            <TableCell>Created At</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {logList.logs.map((item) => (
                                            <TableRow
                                                key={item.log_id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.user_name}
                                                </TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell>{item.phone_number}</TableCell>
                                                <TableCell>{item.category}</TableCell>
                                                <TableCell>{item.channel}</TableCell>
                                                <TableCell>{item.message}</TableCell>
                                                <TableCell>{item.create_at}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    )}
                </Box>
            </Container>
            <AddDialog
                open={openAddDialog}
                handleClose={handleCloseAddDialog}
                categories={categoryList.categories}
                onAfterAdd={onAfterAdd}
            />
        </ThemeProvider>
    );
};