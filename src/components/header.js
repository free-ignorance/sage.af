import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Scheme from "./style";

const BotTriangle = styled.div`
  left: 33.7vw;
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 300px 256px 300px;
  border-color: transparent transparent ${Scheme.colors.yellowc.hex} transparent;
`;

const LogoContainer = styled.div`
  position: relative;
  left: -95px;
  top: 100px;

  div {
    text-align: center;
    color: ${Scheme.colors.yellowc.hex};
    font-family: 'Homemade Apple';
    font-weight: 700;
    font-size: 5em;
    /*Create overlap*/
    margin: 0;
    line-height: 0;

    animation: glitch1 23.3s infinite;
  }

  div:nth-child(2) {
    color: #67f3da;
    animation: glitch2 10.3s infinite;
  }
  
  div:nth-child(3) {
    color: #f16f6f;
    animation: glitch3 13.3s infinite;
  }
  /*Keyframes*/
  
  @keyframes glitch1 {
    0% {
      transform: none;
      opacity: 1;
    }
    7% {
      transform: skew(-0.5deg, -0.9deg);
      opacity: 0.75;
    }
    10% {
      transform: none;
      opacity: 1;
    }
    27% {
      transform: none;
      opacity: 1;
    }
    30% {
      transform: skew(0.8deg, -0.1deg);
      opacity: 0.75;
    }
    35% {
      transform: none;
      opacity: 1;
    }
    52% {
      transform: none;
      opacity: 1;
    }
    55% {
      transform: skew(-1deg, 0.2deg);
      opacity: 0.75;
    }
    50% {
      transform: none;
      opacity: 1;
    }
    72% {
      transform: none;
      opacity: 1;
    }
    75% {
      transform: skew(0.4deg, 1deg);
      opacity: 0.75;
    }
    80% {
      transform: none;
      opacity: 1;
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }
  
  @keyframes glitch2 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(-2px, -3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(-5px, -2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(-5px, -1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(-2px, -6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
  }
  
  @keyframes glitch3 {
    0% {
      transform: none;
      opacity: 0.25;
    }
    7% {
      transform: translate(2px, 3px);
      opacity: 0.5;
    }
    10% {
      transform: none;
      opacity: 0.25;
    }
    27% {
      transform: none;
      opacity: 0.25;
    }
    30% {
      transform: translate(5px, 2px);
      opacity: 0.5;
    }
    35% {
      transform: none;
      opacity: 0.25;
    }
    52% {
      transform: none;
      opacity: 0.25;
    }
    55% {
      transform: translate(5px, 1px);
      opacity: 0.5;
    }
    50% {
      transform: none;
      opacity: 0.25;
    }
    72% {
      transform: none;
      opacity: 0.25;
    }
    75% {
      transform: translate(2px, 6px);
      opacity: 0.5;
    }
    80% {
      transform: none;
      opacity: 0.25;
    }
    100% {
      transform: none;
      opacity: 0.25;
    }
`;

const TopTriangle = styled.div`
  position: relative;
  left: -295px;
  top: 3.5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 295px 250.5px 295px;
  border-color: transparent transparent ${Scheme.colors.background.hex} transparent;
`;

const Eye = styled.div`
  position: relative;
  top: 15px;
  left: -1.75vw;
  width: 1.5vw;
  height: 1.5vw;
  background-image: radial-gradient(circle, ${Scheme.colors.background.hex} 8%, ${Scheme.colors.yellowc.hex} 18%, ${Scheme.colors.background.hex} 8%, ${Scheme.colors.yellowc.hex} 35%, ${Scheme.colors.background.hex} 35%);
  border-radius: 0 55%;
  border: 2.5px solid ${Scheme.colors.yellowc.hex};
  transform: rotate(-45deg);
  transform-origin: 100% 0;
  filter:blur(0.5px);
`;

const HeaderContainerStyle = styled.div`
  position: relative;
  text-align: center;
  top: 0;
  position: sticky;
  z-index: 10;
  background: inherit;
  width: 100%;
  height: 250px;
`;

const HeaderStyle = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  position: relative;
  top: -50px;

  a {
    text-decoration: none;
    color: #00b8ff;
  }

  nav {
    margin: auto;
    line-height: 1.1 rem;
    text-shadow: 0 0 2px rgba(100,100,100,0.5);
  }
`;

const NavStyle = styled.nav`
  width: 100%;
  margin: auto;
  overflow: hidden;

  .active {
    text-decoration: underline;
  }

  ul {
    margin: 0;
    margin-top:1rem;
    padding: 0;
    list-style: none;
  }

  li {

    padding: 0.2rem;
    display:inline;

    span {
      font-size: 1.1rem;
      font-weight: 700;
      color: ${Scheme.colors.red.hex};
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 60rem;
    li {
      padding: 0.2rem;
    }
  }
`;


const Header = ({ siteTitle }) => (
   <HeaderContainerStyle>
    <BotTriangle>
      <TopTriangle>
        <Eye />
        <LogoContainer>
          <div>Sage</div>
          <div>Sage</div>
          <div>Sage</div>
        </LogoContainer>
      </TopTriangle>
    </BotTriangle>

    <HeaderStyle>
    {/* <style>
      @import url('https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap');
    </style>   */}
      <NavStyle>
        <ul>

          <li><Link to='/'>Home</Link></li>
          <li><span>|</span></li>
          <li>
            <Link to='/tarot'>Tarot Reading</Link>
          </li>
          <li><span>|</span></li>
          <li>
            <Link to='/cards'>Tarot Cards</Link>
          </li>
          <li><span>|</span></li>
          <li>
            <Link to='/'>Moon</Link>
          </li>
          <li><span>|</span></li>
          <li><Link to='/tarot/about'>About Us</Link></li>
        </ul>
      </NavStyle>
    </HeaderStyle>
   </HeaderContainerStyle>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sage AF - Disrupting your Chakras`,
}

export default Header
