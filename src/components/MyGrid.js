import { Grid } from '@mui/material';
import React from 'react'
import MyInput from './MyInput';

const MyGrid = () => {
    return (
        <Grid container>
            <Grid className='py-2' item md={6}>
                <MyInput className='underline' placeholder='Name' />
            </Grid>
            <Grid className='py-2' item md={6}>
                <MyInput className='underline' placeholder='Email' />
            </Grid>
        </Grid>
    )
}
export default MyGrid;
