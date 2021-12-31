import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
const pkjson = require("../../package.json");

const FooterContainerStyle = styled.div`
  border-top: thin solid rgb(223, 216, 202);
  margin-top: 2rem;
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
  text-align: center;
`;

const FooterStyle = styled.footer`
  width: 100%;
  font-size: 10px;
  color: #105652;
  font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, sans-serif;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin: auto;
  overflow: hidden;
  text-align: center;


  a {
    text-decoration: none;
    color: #105652;
  }
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
    padding: 0.3rem;
    display:inline;
    span {
      color: #B91646;
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
    li {
      padding: 0.85rem;
    }
  }
`;

const StandOutFont = styled.span`
  font-family: 'Amatic SC';
  font-weight: 700;
  color: #B91646;
	padding: 0.5rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  font-size: 1.2rem;
`;

const Footer = () => (
  <FooterContainerStyle>
    <FooterStyle>
      <ul>
        <li><a href="#">Terms of Use</a></li>
        <li><span>|</span></li>
        <li><a href="#">Sitemap</a></li>
        <li><span>|</span></li>
        <li><Link to='/privacy'>Privacy Policy</Link></li>
      </ul>
      <div>© {new Date().getFullYear()}<StandOutFont>Sage AF</StandOutFont>LLC. All Rights Reserved</div>
      <div>v${pkjson.version}-WEB</div>
    </FooterStyle>
  </FooterContainerStyle>
);

export default Footer
