import {
  Button, Grid, Link, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import TheRiverMill from '../images/TheRiverMill.jpg';
import schedulePageStyles from '../styles/schedulePageStyles';

export default function Schedule() {
  return (
    <Box sx={schedulePageStyles.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Typography textAlign="center" variant="h2">
            schedule
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            alt="The bride and groom"
            sx={schedulePageStyles.imgContainer}
            src={TheRiverMill}
          />
        </Grid>
        <Grid item>
          <Typography textAlign="center" variant="h6">
            We can&apos;t wait to see you!
            <hr />
          </Typography>
        </Grid>
        <Grid item>
          {/* Ceremony & Reception container */}
          <Grid container spacing={6} sx={schedulePageStyles.ceremonyReceptionContainer}>
            <Grid item xs={12}>
              <LocationOnIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h2">
                Location
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h5">
                The River Mill
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h5">
                1672 West Bowman Road
                <br />
                French Camp, California
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="https://goo.gl/maps/xTwZtZ6cQDwHHQVM7"
                target="_blank"
                rel="noreferrer noopener"
                underline="none"
              >
                <Button variant="outlined" size="large">
                  Map
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <EventIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h2">
                Date
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h5">
                Friday, October 7th, 2022
                <br />
                5:00 pm - 11:00 pm
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CheckroomOutlinedIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h2">
                Dress Code
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h5">
                Formal attire
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign="center" variant="h5">
                Ceremony will be outside, dinner and cocktail hour
                will be inside. We recommend wearing grass friendly
                foot wear and a jacket or coat for the evening.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
