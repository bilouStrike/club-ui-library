import styled from "styled-components";

import buttonProps from './button.type';

export const StyledButton = styled.button<buttonProps>`
    padding: ${props => props.size};
    border-radius: 10px;
    border: none;
    color: #fff;
    background-color: ${props => props.color}
`;
