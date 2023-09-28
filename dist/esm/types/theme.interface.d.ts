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
export default ThemeOptions;
