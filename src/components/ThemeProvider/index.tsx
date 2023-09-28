import React, { createContext, useContext } from "react";
import ThemeOptions from "../../types/theme.interface";
import defaultTheme from "../../themes";

// Create a context for the theme
const ThemeContext = createContext<ThemeOptions>(defaultTheme);
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children, theme }: { children: React.ReactNode, theme: ThemeOptions }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;