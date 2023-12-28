import { Alert, AlertTitle, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { AlertErrorProps } from '../utils/models';

export const AlertError = ({ msg }: AlertErrorProps) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (msg) {
            setOpen(true);
        }
    }, [msg]);
    const handleClose = () => setOpen(false);
    const action = (
        <>
            <Button size="small" onClick={handleClose}>
                OK
            </Button>
        </>
    );
    if (!open) {
        return null;
    }
    return (
        <Alert severity="error" action={action}>
            <AlertTitle>Error</AlertTitle>
            {msg}
        </Alert>
    );
};
