import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { EmojiEmotions } from '@mui/icons-material';

const Home = () => {
  return <>
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h1" color="primary">Welcome to the MyApp </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4">This is a sample page designed by Rounik Majumder </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Button variant="contained" color="primary" startIcon={<EmojiEmotions />}>Namaste</Button>
      </Grid>
    </Grid>
  </>;
};

export default Home;
