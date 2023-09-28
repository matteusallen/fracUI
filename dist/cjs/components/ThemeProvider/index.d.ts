import React from "react";
import ThemeOptions from "../../types/theme.interface";
export declare const useTheme: () => ThemeOptions;
declare const ThemeProvider: ({ children, theme }: {
    children: React.ReactNode;
    theme: ThemeOptions;
}) => React.JSX.Element;
export default ThemeProvider;
