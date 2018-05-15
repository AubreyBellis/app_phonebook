import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
// import SplashPageFooter from './SplashPageFooter';
import axios from 'axios';
const HomePageContainer = styled.div`
display: flex;
justify-content: space-between;
height: 100vh;
width: 100vw;
background-image: url("https://i.imgur.com/VjqEdTl.jpg");
h1{
    font-family: 'Open Sans', sans-serif;
    font-family: 'Nixie One', cursive;
    text-align:center;
    font-size:85px;
}
a{
    text-decoration: none;
    color:white;
    margin: 0 5px;
    &:visited{
    color: black;
    }
`

class SplashPage extends Component {
    render() {
        return (
                <div>
                    <HomePageContainer>
                        <div class="col-xs-12">
                        <h1>phone_book</h1>
                        </div>
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