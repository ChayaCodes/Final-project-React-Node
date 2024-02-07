import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: [
        'Arial',
        'sans-serif'
      ].join(','),
    },
    palette: { //אפור, שחור, לבן
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ffffff',
      },
      tertiary: {
        main: '#aaaaaa',
      },
    },
  });

export default theme;