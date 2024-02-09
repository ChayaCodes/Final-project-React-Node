import { List, ListItemButton, ListItemText } from '@mui/material';

const SideBar = () => {

    return (
/*
אני רוצה שכל קישור בתפריט, כאשר הוא פעיל, הטקסט שלו יהיה מודגש (לדוגמא כאשר נמצאים בדף קורסים, הקישור קורסים יהיה בטקסט מודגש)
*/
      <List>
          <ListItemButton href='/personal-area/courses'>
            <ListItemText primary="קורסים" isActive/>
          </ListItemButton>
          <ListItemButton href='/personal-area/tutorials'>
            <ListItemText primary="סרטונים " />
          </ListItemButton>
          <ListItemButton href='/personal-area/community'>
            <ListItemText primary="קהילה" />
          </ListItemButton>
          <ListItemButton href='/personal-area/zoom'>
            <ListItemText primary="הזום השבועי" />
          </ListItemButton>
      </List>
  );
};

export default SideBar;
