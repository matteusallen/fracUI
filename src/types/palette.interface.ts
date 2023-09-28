interface PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  success?: PaletteColorOptions;
  text?: PaletteTextOptions;
  action?: PaletteActionOptions;
}

interface PaletteColorOptions {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

interface PaletteTextOptions {
  primary?: string;
  secondary?: string;
  disabled?: string;
  hint?: string;
}

interface PaletteActionOptions {
  active?: string;
  hover?: string;
  hoverOpacity?: number;
  selected?: string;
  selectedOpacity?: number;
  disabled?: string;
  disabledBackground?: string;
  disabledOpacity?: number;
  focus?: string;
  focusOpacity?: number;
  activatedOpacity?: number;
}
