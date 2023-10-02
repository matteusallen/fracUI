import React, { useState } from "react"
import { useTheme } from '../ThemeProvider';
import ThemeOptions from "../../types/theme.interface";

type ButtonSizes = 'small'| 'medium' | 'large'
type ButtonTypes = "primary" | "secondary"
type Button = {
    label: string,
    btnType?: ButtonTypes,
    size?: ButtonSizes
}

export const Button = ({
    label,
    btnType,
    size
}: Button) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const buttonStyles = (theme: ThemeOptions, btnType?: ButtonTypes, size?: ButtonSizes) => {
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
            ...(!btnType || btnType === 'primary') && primaryStyles,
            ...btnType === 'secondary' && secondaryStyles,
            ...size === 'small' && smallStyles,
            ...(!size || size === 'medium') && mediumStyles,
            ...size === 'large' && largeStyles,
            ...hover && hoverStyles 
        };
    
        return styles;
    }

    return (
    <button style={buttonStyles(theme, btnType, size)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {label}
    </button>)
}