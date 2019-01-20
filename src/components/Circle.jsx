import React from 'react';
import styled from 'styled-components';
export default function Circle({ color }) {
    return <StyledCircle color={color} />;
}

const StyledCircle = styled.div`
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: ${({ color }) => color};
`;
