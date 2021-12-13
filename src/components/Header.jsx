import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
  return (
      <AppBar position='static' sx={{backgroundColor: '#245D56'}}>
        <Toolbar>
          <IconButton color="inherit" onClick={props.handleFilters}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Filters
          </Typography>
          <Button color="inherit">Sign in</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
  );
}