import React from 'react';
import './style.css';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'default';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'default',
    size = 'medium',
    disabled = false,
    onClick,
    className = '',
    style = {}
}) => {
    const commonClassName = 'mobile-button';

    const colorClassName = `mobile-button--${variant}`;

    const sizeClassName = `mobile-button--${size}`;

    const disabledClassName = `${disabled ? 'mobile-button--disabled' : ''}`;

    const finalClassName = `${commonClassName} ${colorClassName} ${sizeClassName} ${disabledClassName} ${className}`;

    return (
        <button
            className={finalClassName}
            style={style}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};