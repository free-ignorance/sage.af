import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Scheme from "../../style";
import Cloud from './Cloud';
import Moon from './lunar/Moon';

const HeaderContainerStyle = styled.div`
  height: 256px;
  margin-top: 1rem;
  text-align: center;
`;

const NavContainerStyle = styled.div`
  margin: auto;
  width: 42%;
  padding: 0.5rem;
  display: flex;
`;

const NavStyle = styled.nav`
  background: ${Scheme.colors.background.hex};
  margin: auto;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-top: 2px solid ${Scheme.colors.purple.hex};
  border-left: 2px solid ${Scheme.colors.purple.hex};
  border-right: 2px solid ${Scheme.colors.purple.hex};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  z-index: 15;

  &::before {

  }
  

  &::after {

  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }

  li {
    display: inline;
    padding: 0.5rem;

    span {
      color: ${Scheme.colors.purple.hex};
    }
  }
`;


const Header = () => (
   <HeaderContainerStyle>
    <Moon />
    <NavContainerStyle>
      <Cloud />
      <NavStyle>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li><span>|</span></li>
          <li>
            <Link to='/#Rituals'>Rituals</Link>
          </li>
          <li><span>|</span></li>
          <li>
            <Link to='/tarot'>Tarot</Link>
          </li>
          <li><span>|</span></li>
          <li>
            <Link to='/#Reagents'>Reagents</Link>
          </li>
          <li><span>|</span></li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </NavStyle>
      <Cloud />
    </NavContainerStyle>
   </HeaderContainerStyle>
);

export default Header
