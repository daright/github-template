import React from 'react';
import styled from 'styled-components';
import CommitListItem from './CommitListItem';

export default function DateCommitListItem({ date, issues, toggleStar }) {
    return (
        <div>
            <StyledDate>{date}</StyledDate>
            {issues.map((issue, index) => (
                <CommitListItem {...issue} key={index} index={index} toggleStar={toggleStar} />
            ))}
        </div>
    );
}

const StyledDate = styled.p`
    color: #8a8995;
    height: 30px;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 12px;
`;
