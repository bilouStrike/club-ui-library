import React from "react";
import { StyledButton } from "./button.style";
import buttonProps from './button.type';
import { colors, buttonSize, corner } from '../../../styles/foundation';
import { mapStyles } from '../../../styles/helpers';

const Button:React.FC<buttonProps> = (props) => {
    const { 
        size = 'normal',
        variant = 'primary',
        children,
        onClick,
        loading,
        inverted = false,
        color,
        disabled = false,
        rounded
    } = props
    
    return <StyledButton
        size={mapStyles(buttonSize, size)}
        variant={mapStyles(colors, variant)}
        onClick={onClick}
        inverted={inverted}
        color={color}
        disabled={disabled}
        rounded={mapStyles(corner, rounded)}
    >
        {loading ? 'loading' : children} 
    </StyledButton>
}

export default Button;


