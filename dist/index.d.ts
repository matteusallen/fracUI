import React from 'react';

declare const Button: ({ label, type, size }: {
    label: React.ReactNode;
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

export { Button, useTheme };
