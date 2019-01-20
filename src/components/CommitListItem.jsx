import React from 'react';
import { ReactComponent as Star } from '../assets/icon-star.svg';
import styled from 'styled-components';
export default function CommitListItem({ title, isStarred, toggleStar, index }) {
    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledStar isStarred={isStarred} onClick={() => toggleStar(index)}>
                <Star />
            </StyledStar>
        </StyledWrapper>
    );
}

const StyledTitle = styled.span`
    color: #4a4848;
`;

const StyledWrapper = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 12px;
    font-size: 15px;
    margin-bottom: 5px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    list-style: none;
`;

const StyledStar = styled.button`
    background-color: white;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    cursor: pointer;
    svg {
        fill: ${({ isStarred }) => (isStarred ? '#000' : '#fff')};
        stroke: #e5e5e5;
    }
`;
