import React, { useState } from "react"
import { useTheme } from '../ThemeProvider';
import ThemeOptions from "../../types/theme.interface";

export const Button = ({
    label,
    type,
    size
}: {
    label: string,
    type: string,
    size: string
}) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const buttonStyles = (theme: ThemeOptions, type?: string, size?: string) => {
        const smallStyles = {
            minHeight: '40px',
            fontSize: '14px'
        }
        const mediumStyles = {
            minHeight: '44px',
            fontSize: '17px'
        }
        const largeStyles = {
            minHeight: '48px',
            fontSize: '20px'
        }
        const primaryStyles = {
            backgroundColor: theme.palette?.primary?.main,
            color: theme.palette?.primary?.contrastText,
        }
        const secondaryStyles = {
            backgroundColor: theme.palette?.secondary?.main,
            color: theme.palette?.secondary?.contrastText,
        }
        const hoverStyles = {
            opacity: theme.palette?.action?.hoverOpacity,
        }

        const styles = {
            padding: theme.spacing && `0 ${theme.spacing(2)}px`,
            border: 'none',
            cursor: 'pointer',
            fontFamily: theme.typography?.fontFamily,
            transition: `all ${theme.transitions?.duration?.standard}ms ${theme.transitions?.easing}`,
            ...type === 'primary' && primaryStyles,
            ...type === 'secondary' && secondaryStyles,
            ...size === 'small' && smallStyles,
            ...size === 'medium' && mediumStyles,
            ...size === 'large' && largeStyles,
            ...hover && hoverStyles 
        };
    
        return styles;
    }

    return (
    <button type="button" style={buttonStyles(theme, type, size)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {label}
    </button>)
}