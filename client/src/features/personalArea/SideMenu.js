import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const styles = {
  sidebar: {
    height:"50%",
    width: "20%",
    backgroundColor: '#fff',
  },
};

const SideBar = () => {
  return (

      <List>
          <ListItemButton href='personal-area/courses'>
            <ListItemText primary="קורסים" />
          </ListItemButton>
          <ListItemButton href='personal-area/tutorials'>
            <ListItemText primary="סרטונים " />
          </ListItemButton>
          <ListItemButton href='personal-area/community'>
            <ListItemText primary="קהילה" />
          </ListItemButton>
          <ListItemButton href='personal-area/zoom'>
            <ListItemText primary="הזום השבועי" />
          </ListItemButton>
      </List>
  );
};

export default SideBar;
