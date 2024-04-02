import {
  List, ListItemButton, ListItemText, Typography,
} from '@mui/material';

function SideBar() {
  return (
    <div style={{
      width: '100px', backgroundColor: 'white', height: '100vh', display: 'absolute', zIndex: 1000, position: 'fixed', top: 0, right: 0, borderLeft: '1px solid #5c5c5c',
    }}
    >
      <Typography variant="h6" style={{ flexGrow: 0 }}> LOGO </Typography>

      <List>
        <ListItemButton href="/personal-area/courses">
          <ListItemText primary="קורסים" isActive />
        </ListItemButton>
        <ListItemButton href="/personal-area/tutorials">
          <ListItemText primary="סרטונים " />
        </ListItemButton>
        <ListItemButton href="/personal-area/community">
          <ListItemText primary="קהילה" />
        </ListItemButton>
        <ListItemButton href="/personal-area/zoom">
          <ListItemText primary="הזום השבועי" />
        </ListItemButton>
      </List>
    </div>
  );
}

export default SideBar;
