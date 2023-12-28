import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, LinearProgress } from '@mui/material';
import { useState } from 'react';
import { UserForm } from './user-form';
import { useUserContext } from '../providers/users-context';
import CloseIcon from '@mui/icons-material/Close';
import { AlertError } from './alert-error';
import useFetch from '../hooks/useFetch';
import { ErrorMsg } from '../utils/error-msg';
import { postUserRequest } from '../utils/user-api';

export function UserDialog() {
    const { addUser } = useUserContext();
    const [open, setOpen] = useState(false);

    const { loading, error, setError, tryFetch } = useFetch(postUserRequest.url, ErrorMsg.postUserRequest, { method: 'POST' });
    const handleClose = () => setOpen(false);

    const submit = async (value: any) => {
        try {
            await tryFetch({ config: { ...postUserRequest.config(value) } });
            addUser(value);
            setOpen(false);
        } catch (err: any) {
            console.log('tryFetch failed at UserDialog:submit');
        }
    };

    const openUserDialog = () => {
        setError('');
        setOpen(true);
    };

    const loadingEl = (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    );

    const ErrorEl = <AlertError msg={error} />;

    return (
        <>
            <Button onClick={openUserDialog} variant="contained">
                Add User
            </Button>
            <Dialog onClose={handleClose} open={open}>
                {loading ? loadingEl : null}
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        aligeItems: 'center',
                    }}
                >
                    <span> New user</span>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                {error ? ErrorEl : null}
                <DialogContent>
                    <UserForm submit={submit} cancel={handleClose}></UserForm>
                </DialogContent>
            </Dialog>
        </>
    );
}
