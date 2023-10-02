import React from 'react';

type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonTypes = "primary" | "secondary";
type Button = {
    label: string;
    btnType?: ButtonTypes;
    size?: ButtonSizes;
};
declare const Button: ({ label, btnType, size }: Button) => React.JSX.Element;

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
    theme?: ThemeOptions | undefined;
}) => React.JSX.Element;

export { Button, ThemeProvider, useTheme };
