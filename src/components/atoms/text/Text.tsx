import React from "react";
import { StyledText } from './style';

interface textProps {
    size: number,
    children: React.ReactNode
}

const Text:React.FC<textProps> = ({children, size}) => {
    return <StyledText size={size}> {children} </StyledText>
}

export default Text;