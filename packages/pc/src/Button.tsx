import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    className = ''
}) => {
    const baseClasses = 'pc-button';
    const variantClasses = `pc-button--${variant}`;
    const sizeClasses = `pc-button--${size}`;
    const disabledClasses = disabled ? 'pc-button--disabled' : '';

    const classes = [baseClasses, variantClasses, sizeClasses, disabledClasses, className]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};