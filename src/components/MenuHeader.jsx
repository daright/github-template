import React from 'react';
import Circle from './Circle';
import styled from 'styled-components';
export default function MenuHeader() {
    return (
        <StyledWrapper>
            <Circle color={'#ff594f'} />
            <Circle color={'#ffbc1b'} />
            <Circle color={'#00cd46'} />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background-color: #000;
`;
