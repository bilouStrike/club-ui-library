import React from "react";

export default interface buttonProps {
    size?: 'mini'| 'normal' | 'medium' | 'large' | 'big',
    variant?: string,
    children?: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    loading?: boolean,
    inverted?: boolean,
    color?: string,
    disabled?: boolean,
    rounded?: string
}
