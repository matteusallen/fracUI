# matteusallen/fracUI

# fracUI - React Theme Provider and Button Component

This README provides instructions on how to use the `ThemeProvider` component for managing themes and the `Button` component using the theme styles. No libraries like styled-components or mui emotions were used to create this.

## Table of Contents

- [Usage](#usage)
  - [ThemeProvider](#themeprovider)
  - [Button](#button)
- [Example](#example)
  
```
## Usage
The ThemeProvider component allows you to provide a theme for your application. It uses the React Context API to make the theme accessible to child components. 
Wrap your application with the ThemeProvider component at the top level and pass a theme object as a prop.

```jsx
import { ThemeProvider } from '@matteusallen/fracui';
import React from 'react';
import customTheme from './your-custom-theme'; // Import your custom theme object

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <h1>App</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
```
In your child components, you can access the theme using the useTheme hook:

```jsx
import React from 'react';
import { useTheme } from '@matteusallen/fracui';

function MyComponent() {
    const theme = useTheme();

    return <div style={{backgroundColor: theme.palette.primary.main}}></div>
}
```
