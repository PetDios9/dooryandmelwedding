import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import registryPageStyles from '../styles/registryPageStyles';

export default function Registry() {
  return (
    <Box sx={registryPageStyles.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={registryPageStyles.textContainer}
      >
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center">
            Registry is on the way. &#9829;
          </Typography>
          <Typography variant="h6" textAlign="center">
            Thank you for your patience.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
