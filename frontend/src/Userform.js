import {Button, Grid, Input, Typography} from "@mui/material";
import { useState } from "react";

const Userform = props =>{

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    return(
        <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: '#ffffff',
            marginBottom: '30px',
            display:'block',
            marginLeft: '30px'
        }}
        >
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                component={'h1'} 
                sx={{color:'#000000', marginLeft: '15px'}}>User Form
                </Typography>
            </Grid>

            <Grid>
                <Typography 
                component={'label'} 
                htmlFor="id"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block',
                    marginLeft: '30px'
            }}
                >
                    ID
                </Typography>
                <Input 
                type="number"
                id="id"
                name="id"
                sx={{ width:'400px', marginLeft: '30px'}}
                value={id}
                onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                component={'h1'} 
                sx={{color:'#000000', marginLeft: '15px'}}>User Form
                </Typography>
            </Grid>

            <Grid>
                <Typography 
                component={'label'} 
                htmlFor="id"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block',
                    marginLeft: '30px'
            }}
                >
                    Name
                </Typography>
                <Input 
                type="text"
                id="name"
                name="name"
                sx={{ width:'400px',  marginLeft: '30px'}}
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Button
            sx={{
                margin:'auto',
                marginBottom: '20px',
                backgroundColor: '#00c6e6',
                color: '#000000',
                marginLeft: '30px',
                marginTop:'20px',
                '&:hover': {
                    opacity:'0.7',
                    backgroundColor: '#00c6e6'
                }
            }}
            >
                Add
            </Button>
        </Grid>
    );
}

export default Userform;