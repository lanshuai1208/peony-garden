import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const variantStyles = {
    primary: {
        backgroundColor: '#1890ff',
        color: 'white'
    },
    secondary: {
        backgroundColor: '#f0f0f0',
        color: '#333'
    },
    danger: {
        backgroundColor: '#ff4d4f',
        color: 'white'
    },
    success: {
        backgroundColor: '#52c41a',
        color: 'white'
    }
};

const sizeStyles = {
    small: {
        padding: '4px 8px',
        fontSize: '12px'
    },
    medium: {
        padding: '8px 16px',
        fontSize: '14px'
    },
    large: {
        padding: '12px 24px',
        fontSize: '16px'
    }
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    className = ''
}) => {

    const defaultStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.6 : 1,
    } as const

    const style = {
        ...defaultStyle,
        ...variantStyles[variant],
        ...sizeStyles[size]
    };

    return (
        <button
            className={className}
            style={style}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};