import React, { Component } from 'react';
import styled from 'styled-components';
import DateCommitListItem from './DateCommitListItem';

export default class CommitList extends Component {
    state = {
        issueList: [
            {
                date: '19-07-2016',
                issues: [{ title: 'Page changes', isStarred: true }, { title: 'Review of last issues', isStarred: true }]
            },
            {
                date: '18-07-2016',
                issues: [{ title: 'Visual UI Update Review', isStarred: false }, { title: 'Sidebar changes', isStarred: false }]
            },
            {
                date: '15-07-2016',
                issues: [
                    { title: 'Crash update', isStarred: false },
                    { title: 'Review of last issues', isStarred: true },
                    { title: 'Sidebar changes', isStarred: false }
                ]
            },
            {
                date: '14-07-2016',
                issues: [{ title: 'Crash update', isStarred: true }, { title: 'Review of last issues', isStarred: true }]
            }
        ]
    };

    toggleStar = (date, index) => {
        this.setState(prevState => {
            return {
                issueList: prevState.issueList.map((issue, i) => {
                    if (date === issue.date) {
                        return {
                            ...issue,
                            issues: issue.issues.map((issue, i) => {
                                if (index === i) {
                                    return { ...issue, isStarred: !issue.isStarred };
                                } else {
                                    return issue;
                                }
                            })
                        };
                    } else {
                        return issue;
                    }
                })
            };
        });
    };
    render() {
        return (
            <StyledWrapper>
                {this.state.issueList.map((issue, index) => (
                    <DateCommitListItem key={index} {...issue} toggleStar={this.toggleStar.bind(this, issue.date)} />
                ))}
            </StyledWrapper>
        );
    }
}
const StyledWrapper = styled.section`
    width: 500px;
    background-color: #f6f6f6;
    padding: 10px 15px;
    overflow: auto;
`;
