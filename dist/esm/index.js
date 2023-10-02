import React, { createContext, useContext, useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var defaultTheme = {
    palette: {
        primary: {
            main: '#1976D2',
            light: '#4791db',
            dark: '#115293',
            contrastText: '#fff',
        },
        secondary: {
            main: '#F50057',
            light: '#f73378',
            dark: '#ab003c',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        action: {
            hover: 'rgba(0, 0, 0, 0.08)',
            hoverOpacity: 0.8,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: '#1976D2',
            focusOpacity: 0.12,
        },
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '16px',
        fontWeightRegular: 400,
        fontWeightBold: 700
    },
    spacing: function (factor) { return factor * 8; },
    transitions: {
        easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195
        },
    },
    shadows: ['none', '0px 2px 4px rgba(0, 0, 0, 0.1)', '0px 4px 8px rgba(0, 0, 0, 0.1)'],
};

// Create a context for the theme
var ThemeContext = createContext(defaultTheme);
var useTheme = function () { return useContext(ThemeContext); };
var ThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (React.createElement(ThemeContext.Provider, { value: theme }, children));
};

var Button = function (_a) {
    var label = _a.label, type = _a.type, size = _a.size;
    var theme = useTheme();
    var _b = useState(false), hover = _b[0], setHover = _b[1];
    var buttonStyles = function (theme, type, size) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (type === void 0) { type = 'primary'; }
        if (size === void 0) { size = 'medium'; }
        var smallStyles = {
            minHeight: '40px',
            fontSize: '14px'
        };
        var mediumStyles = {
            minHeight: '44px',
            fontSize: '17px'
        };
        var largeStyles = {
            minHeight: '48px',
            fontSize: '20px'
        };
        var primaryStyles = {
            backgroundColor: (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a.primary) === null || _b === void 0 ? void 0 : _b.main,
            color: (_d = (_c = theme.palette) === null || _c === void 0 ? void 0 : _c.primary) === null || _d === void 0 ? void 0 : _d.contrastText,
        };
        var secondaryStyles = {
            backgroundColor: (_f = (_e = theme.palette) === null || _e === void 0 ? void 0 : _e.secondary) === null || _f === void 0 ? void 0 : _f.main,
            color: (_h = (_g = theme.palette) === null || _g === void 0 ? void 0 : _g.secondary) === null || _h === void 0 ? void 0 : _h.contrastText,
        };
        var hoverStyles = {
            opacity: (_k = (_j = theme.palette) === null || _j === void 0 ? void 0 : _j.action) === null || _k === void 0 ? void 0 : _k.hoverOpacity,
        };
        var styles = __assign(__assign(__assign(__assign(__assign(__assign({ padding: theme.spacing && "0 ".concat(theme.spacing(2), "px"), border: 'none', cursor: 'pointer', fontFamily: (_l = theme.typography) === null || _l === void 0 ? void 0 : _l.fontFamily, transition: "all ".concat((_o = (_m = theme.transitions) === null || _m === void 0 ? void 0 : _m.duration) === null || _o === void 0 ? void 0 : _o.standard, "ms ").concat((_p = theme.transitions) === null || _p === void 0 ? void 0 : _p.easing) }, type === 'primary' && primaryStyles), type === 'secondary' && secondaryStyles), size === 'small' && smallStyles), size === 'medium' && mediumStyles), size === 'large' && largeStyles), hover && hoverStyles);
        return styles;
    };
    return (React.createElement("button", { type: "button", style: buttonStyles(theme, type, size), onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } }, label));
};

export { Button, ThemeProvider, useTheme };
//# sourceMappingURL=index.js.map
