import { Box } from "@mui/material";
import Userform from "./Userform";
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name:'wishmi',
    },
    {
        id: 2,
        name: 'hiranya',
    }
];

const Users = () =>{
    return(

        <Box
        sx={
            {
                width: 'calc(100%-100px)',
                margin: 'auto',
                marginTop: '100px'
            }
        }
        >
        <Userform />
        <UsersTable rows={users}/>
        </Box>
    );
}

export default Users;