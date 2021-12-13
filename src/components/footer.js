import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  font-family: 'Amatic SC';
  font-weight: 700;
  color: #105652;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  align-items: center;
	padding: 2rem;

  a {
    text-decoration: none;
  }

  nav {
    margin-left: auto;
  }
`;

const Footer = () => (
  <FooterStyle>
    © {new Date().getFullYear()}
  </FooterStyle>
);

export default Footer
