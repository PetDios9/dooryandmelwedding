/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import {
  AppBar, Grid, Toolbar, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import navbarStyles from '../styles/navbarStyles';

export default function NavBar() {
  return (
    <AppBar sx={navbarStyles.header} elevation={0} color="primary" position="sticky">
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ flexGrow: 1 }}>
              {`d & m | we're getting married!`}
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/" style={navbarStyles.links}>
              <Typography variant="h6" sx={navbarStyles.navTabs}>
                home
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="schedule" style={navbarStyles.links}>
              <Typography variant="h6" sx={navbarStyles.navTabs}>
                schedule
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="registry" style={navbarStyles.links}>
              <Typography variant="h6" sx={navbarStyles.navTabs}>
                registry
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
