import React, { createContext, useContext } from "react";
import ThemeOptions from "../../types/theme.interface";
import defaultTheme from "../../themes";

// Create a context for the theme
const ThemeContext = createContext<ThemeOptions>(defaultTheme);
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children, theme = defaultTheme }: { children: React.ReactNode, theme?: ThemeOptions }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};