import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.Header`
  font-family: 'Ubuntu Mono', Monaco, monospace;
  color: #FFFFFF;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  align-items: center;
  display: flex;

  a {
    text-decoration: none;
  }

  nav {
    margin-left: auto;
  }
`;

const Header = () => (
  <HeaderStyle>
    © {new Date().getFullYear()}
  </HeaderStyle>
);

export default Header
