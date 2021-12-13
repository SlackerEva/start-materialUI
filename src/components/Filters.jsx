import { Drawer, List, ListItem, FormGroup, Switch, FormControlLabel, Divider } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItemIcon, ListItemText } from '@mui/material';

export default function Filters(props) {
  return (
    <Drawer anchor='left' open={props.filtersOpen} onClose={props.filtersClose}>
      <List sx={{ width: '500px'}}>
        <ListItem>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary='Фильтры' /> 
        </ListItem>
        <Divider />
        <ListItem>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Понравившиеся" />
            <FormControlLabel control={<Switch />} label="Купленные" />
            <FormControlLabel control={<Switch defaultChecked />} label="Избранное" />
          </FormGroup>
        </ListItem>
      </List>
    </Drawer>
  );
}