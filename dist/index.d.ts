import React from 'react';

declare const Button: ({ label, type, size }: {
    label: string;
    type: string;
    size: string;
}) => React.JSX.Element;

type ThemeOptions = {
    palette?: PaletteOptions;
    typography?: TypographyOptions;
    spacing?: (factor: number) => number;
    shadows?: Array<string>;
    transitions?: TransitionsOptions;
    fontFamily?: string;
    customVariables?: {
        [key: string]: string;
    };
};

declare const useTheme: () => ThemeOptions;
declare const ThemeProvider: ({ children, theme }: {
    children: React.ReactNode;
    theme: ThemeOptions;
}) => React.JSX.Element;

export { Button, ThemeProvider, useTheme };
