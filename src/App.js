import React, { Component } from 'react';
import Layout from './components/Layout';
import styled from 'styled-components';
import Image from './assets/background.jpg';

class App extends Component {
    render() {
        return (
            <RootWrapper>
                <Layout />
            </RootWrapper>
        );
    }
}

const RootWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: cover;
`;

export default App;
