import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
// import SplashPageFooter from './SplashPageFooter';
import axios from 'axios';
const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100vw;
h1{
    font-family: 'Barrio', cursive;
    text-align:center;
    font-size:85px;
}
h2, h3{
    font-size: 45px;
    text-align:center;
    align-content:center;
    font-family: 'Fjalla One', sans-serif;
}
`

class SplashPage extends Component {
    render() {
        return (
                <div>
                <HomePageContainer>
                <h1>DiGi_Call</h1>

                <br />
                <br />
                <br />
                </HomePageContainer>
                {/* <SplashPageFooter></SplashPageFooter> */}
             
                </div>
        );
    }
}
export default SplashPage;