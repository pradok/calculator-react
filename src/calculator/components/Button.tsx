import * as React from 'react';

interface Props {
    onClick: (e: React.MouseEvent<HTMLElement> ) => void;
    label: string;
    value: string;
}

const Button = ({onClick, label, value}: Props) => {
    return (
        <button
            onClick={onClick}
            data-value={value}
        >
            {label}
        </button>
    )
};

export default Button;