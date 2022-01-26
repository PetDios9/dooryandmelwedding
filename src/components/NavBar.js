/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import {
  AppBar, Grid, Toolbar, Typography, Link,
} from '@mui/material';
import headerStyles from '../styles/headerStyles';

export default function NavBar() {
  return (
    <AppBar sx={headerStyles.header} elevation={0} color="primary">
      <Toolbar>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ flexGrow: 1 }}>
              {`d and m | we're getting married!`}
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" underline="hover" color="white">
              <Typography variant="h6" sx={headerStyles.navTabs}>
                home
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="hover" color="white">
              <Typography variant="h6" sx={headerStyles.navTabs}>
                schedule
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="hover" color="white">
              <Typography variant="h6" sx={headerStyles.navTabs}>
                registry
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="hover" color="white">
              <Typography variant="h6" sx={headerStyles.navTabs}>
                photos
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
