import React from 'react';
import { PluginElementRenderProps } from '@yoopta/editor';
import { cn } from './cn';
// Utility for class names

interface ButtonProps {
    label: string;
    action: string | (() => void);
    style?: 'default' | 'primary' | 'secondary';
}

export const ButtonComponent: React.FC<PluginElementRenderProps> = ({ element }) => {
    if (!element) return null; // Ensure element exists before rendering

    const { label, action, style } = element.props as ButtonProps;

    const handleClick = () => {
        if (typeof action === 'string') {
            window.open(action, '_blank');
        } else if (typeof action === 'function') {
            action();
        }
    };

    return (
        <button
            className={cn(
                'px-4 py-2 rounded-md text-white transition',
                style === 'primary' && 'bg-blue-500 hover:bg-blue-600',
                style === 'secondary' && 'bg-gray-500 hover:bg-gray-600',
                style === 'default' && 'bg-black hover:bg-gray-800'
            )}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};
