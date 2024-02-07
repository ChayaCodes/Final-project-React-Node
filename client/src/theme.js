import { createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';


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

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

export default theme;
export { cacheRtl };
