/**
 * Defines the options for customizing transitions and animations in a theme.
 */
type TransitionsOptions = {
  /**
   * The duration of a standard transition in milliseconds.
   */
  duration?: DurationOptions;

  /**
   * The easing function to be used for transitions.
   */
  easing?: string;

  // Add more transition options as needed
}

type DurationOptions = {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}