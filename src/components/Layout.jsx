import React from 'react';
import Menu from './Menu';
import CommitList from './CommitList';
import styled from 'styled-components';

export default function Layout() {
    return (
        <StyledWrapper>
            <Menu />
            <CommitList />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.section`
    display: flex;
    height: 500px;
    width: 650px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
`;
