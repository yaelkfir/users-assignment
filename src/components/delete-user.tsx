import { IconButton } from '@mui/material';
import { useUserContext } from '../providers/users-context';
import { DeleteUserProps } from '../utils/models';
import DeleteIcon from '@mui/icons-material/Delete';


export const DeleteUser = ({ user }: DeleteUserProps) => {
    const { deleteUser } = useUserContext();
    return (
        <IconButton color="primary" onClick={() => deleteUser(user)}>
            <DeleteIcon />
        </IconButton>
    );
};
