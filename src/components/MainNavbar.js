import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
