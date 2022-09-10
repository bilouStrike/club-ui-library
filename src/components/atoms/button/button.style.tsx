import styled from "styled-components";
import buttonProps from './button.type';
import { corner } from '../../../styles/foundation';

interface buttonPropsSize extends Omit<buttonProps, 'size'> {
    size: string
}

export const StyledButton = styled.button<buttonPropsSize>`
    padding: ${props => props.size};
    border-radius: ${props => props.rounded ? props.rounded : corner.small}px;
    border: ${props => props.inverted ? `2px solid ${props.color}` : 'none'};
    color: ${props => props.inverted ? props.color : '#fff'};
    background-color: ${props => props.inverted ? `#fff` : props.variant}
`;
