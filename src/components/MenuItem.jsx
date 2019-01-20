import React from 'react';
import styled from 'styled-components';
export default function MenuItem({ Icon, title, numOfIssues, isActive }) {
    return (
        <StyledButton isActive={isActive}>
            <StyledIconTitle>
                <Icon />
                {title}
            </StyledIconTitle>
            <StyledNumOfIssues>{numOfIssues}</StyledNumOfIssues>
        </StyledButton>
    );
}

const StyledButton = styled.button`
    height: 50px;
    padding: 17px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    outline: none;
    color: white;
    background-color: ${({ isActive }) => (isActive ? '#1d2032' : 'transparent')};
    cursor: pointer;
    & svg {
        margin-right: 10px;
        fill: white;
    }
    :hover,
    :active {
        background-color: #1d2032;
    }
`;

const StyledNumOfIssues = styled.span`
    color: #707080;
`;

const StyledIconTitle = styled.span`
    display: flex;
    align-items: center;
    font-size: 14px;
`;
