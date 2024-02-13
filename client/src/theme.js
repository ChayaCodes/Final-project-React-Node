import { createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: [
        'Arial',
        'sans-serif'
      ].join(','),
    },
    palette: { 
      primary: {
        main: '#27254C',
      },
      secondary: {
        main: '#23bbae',
      },
      tertiary: {
        main: '#5c5c5c',
      },
    },
    
  });

  

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

export default theme;
export { cacheRtl };