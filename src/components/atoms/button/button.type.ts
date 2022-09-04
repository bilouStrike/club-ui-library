import React from "react";

export default interface buttonProps {
    size?: 'mini'| 'normal' | 'medium' | 'large' | 'big',
    color?: string,
    children?: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement> ) => void,
    loading?: boolean
}
