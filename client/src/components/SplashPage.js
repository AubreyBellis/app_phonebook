import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
const HomePageContainer = styled.div`
display: flex;
height: 100vh;
width: 100%;
background-color: #f4d4df;
}
h1 {
    font-family: 'Open Sans', sans-serif;
    font-family: 'Nixie One', cursive;
    font-size: 6vw;
    padding-left: 7%;
    padding-top: 3%;
}
.redLetters {
    color: #ff1200;
    font-weight: bold;
    }

.whiteLetters {
    font-style: italic;
    font-weight: bold;
    }

a {
    color: white;
    text-decoration: none;
}
`


class SplashPage extends Component {
    render() {
        return (

                    <HomePageContainer>
                        <div class="col-xs-12">
                            <h1>
                                <div class="redLetters">A different kind of</div>
                                <div class="whiteLetters"><Link to="/users">phonebook.</Link></div>
                            </h1>
                        </div>
                    </HomePageContainer>

                
        );
    }
}
export default SplashPage;