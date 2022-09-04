import React from "react";
import { StyledButton } from "./button.style";
import buttonProps from './button.type';
import { colors, buttonPadding } from '../../../styles/foundation';
import { mapStyles } from '../../../styles/helpers';

const Button:React.FC<buttonProps> = ({size = 'normal', color = 'primary', children, onClick, loading}) => {

    return <StyledButton size={mapStyles(buttonPadding, size)} color={mapStyles(colors, color)} onClick={onClick}>
        {loading ? 'loading' : children} 
    </StyledButton>
}

export default Button;


