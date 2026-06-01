import * as React from 'react';

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    children?: React.ReactNode;
}

export declare const Button: React.FC<ButtonProps>;