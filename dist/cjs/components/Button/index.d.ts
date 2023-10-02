import React from "react";
type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonTypes = "primary" | "secondary";
type Button = {
    label: string;
    btnType?: ButtonTypes;
    size?: ButtonSizes;
};
export declare const Button: ({ label, btnType, size }: Button) => React.JSX.Element;
export {};
