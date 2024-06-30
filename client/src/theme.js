import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      'Futurism Regular'


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
