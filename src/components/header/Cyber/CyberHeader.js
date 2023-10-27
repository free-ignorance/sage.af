import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Scheme from "./style";
import CyberEyeofProvidence from "./CyberEyeofProvidence";

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
    <CyberEyeofProvidence />
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
