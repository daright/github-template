import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GithubIcon } from '../assets/icon-github.svg';
import { ReactComponent as OpenIssue } from '../assets/icon-open-issue.svg';
import { ReactComponent as ClosedIssue } from '../assets/icon-closed-issue.svg';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const MenuItems = [
    {
        Icon: GithubIcon,
        title: 'All',
        numOfIssues: 12,
        isActive: true
    },
    {
        Icon: OpenIssue,
        title: 'Open',
        numOfIssues: 8
    },
    {
        Icon: ClosedIssue,
        title: 'Closed',
        numOfIssues: 4
    }
];

export default function Menu() {
    return (
        <StyledNav>
            <MenuHeader />
            {MenuItems.map(item => (
                <MenuItem key={item.title} {...item} />
            ))}
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    min-width: 150px;
    background-color: rgba(16, 16, 34, 0.95);
`;
