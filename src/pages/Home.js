/* eslint-disable max-len */
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import homePageStyles from '../styles/homePageStyles';
import DnM1 from '../images/DnM1.jpg';
import DnM2 from '../images/DnM2.jpg';

export default function Home() {
  return (
    <div>

      <Box
        component="img"
        sx={homePageStyles.imgContainer}
        alt="The bride and groom"
        src={DnM1}
      />

      <Box sx={homePageStyles.textContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography>
              Come join us for our special day together
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AutoAwesomeIcon />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" align="left">
              Melissa Hernandez
              <br />
              &amp;
              <br />
              Dorryen Lopez
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="left">
              October 8th, 2022
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="left">
              Lodi, California
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="left">
              <hr />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" align="left">
              <br />
              when we met!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices, est in euismod suscipit, ipsum massa dapibus nulla, at laoreet ex turpis sit amet libero. Donec quis facilisis est. Cras sollicitudin egestas nisi, et blandit tellus finibus ut. In efficitur blandit purus quis efficitur. Maecenas aliquam sapien sed dapibus imperdiet. Vestibulum viverra felis id laoreet pretium. Mauris ante quam, sollicitudin scelerisque purus non, ullamcorper iaculis mauris. Donec neque libero, euismod vitae posuere in, pharetra quis enim. Aliquam sit amet cursus ante, sit amet euismod sem.

              In in efficitur ipsum. Morbi et diam pr
            </Typography>
          </Grid>
          <Grid item xs={12} />
        </Grid>
      </Box>
      <Box
        component="img"
        sx={homePageStyles.imgContainer}
        alt="The bride and groom"
        src={DnM2}
      />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={homePageStyles.footer}>
            <Typography>
              Made with love by Peter Diosdado &#9829;
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
