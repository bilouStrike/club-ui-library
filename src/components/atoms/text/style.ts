import styled from 'styled-components';

interface textStyleProps {
    size: number,
}

export const StyledText = styled.p<textStyleProps>`
    margin: 0,
    font-size: ${props => (props.size)}px;
`;