import React from "react";

interface textType {
    children: React.ReactNode,
    size: String
}

const Text:React.FC<textType> = ({children}) => {
    return <p>{children}</p>
}

export default Text;