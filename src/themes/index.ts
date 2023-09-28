import ThemeOptions from "../types/theme.interface";

const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#1976D2',
      light: '#4791db',
      dark: '#115293',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F50057',
      light: '#f73378',
      dark: '#ab003c',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.8,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: '#1976D2',
      focusOpacity: 0.12,
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif', 
    fontSize: '16px', 
    fontWeightRegular: 400, 
    fontWeightBold: 700
  },
  spacing: (factor) => factor * 8,
  transitions: {
    easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)', // Example easing function
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
  },
  shadows: ['none', '0px 2px 4px rgba(0, 0, 0, 0.1)', '0px 4px 8px rgba(0, 0, 0, 0.1)'],
};

export default defaultTheme;
