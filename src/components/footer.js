import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const pkjson = require("../../package.json");

const FooterContainerStyle = styled.div`
  width: 100%;
  border-top: thin solid rgb(223, 216, 202);
  margin-top: 2rem;
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
  text-align: center;
`;

const FooterNavStyle = styled.footer`
  width: 100%;
  font-size: 10px;
  color: #105652;
  font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, sans-serif;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin: auto;
  overflow: hidden;

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
    font-size: 12px;
    width: 40rem;
    li {
      padding: 0.85rem;
    }
  }
`;

const StandOutFont = styled.span`
  font-family: "Amatic SC";
  font-weight: 700;
  color: #B91646;
	padding: 0.5rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  font-size: 1.2rem;
`;

const CopyRightStyleVersionStyle = styled.div`
  font-size: 10px;
  color: #105652;
  font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, sans-serif;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin-top: 0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    width: 40rem;
    margin-top: 0.5rem;
  }
`;

/**
 * Some notes for my future self on what i am thinking about the footer.
 * Right now there are 3 categories of links common in footers for ecommerce sites.:
 * 1. Site logistics (terms of use, privacy policy, site map, etc)
 * 2. Site Interlinks (signup, about us, newsletter signup, etc)
 * 3. Brand Social Media (facebook, twitter, instagram, etc)
 * There is also a category of help / ecom support (contact us, faq, etc) a long with tracking orders and returns
 * Given our site is not actually selling products yet, those will be a later stage feature.
 */
const Footer = () => (
  <FooterContainerStyle>
    <FooterNavStyle>
      <ul>
        <li><a href="#">Terms of Use</a></li>
        <li><span>|</span></li>
        <li><a href="#">Sitemap</a></li>
        <li><span>|</span></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
      </ul>
      <p> </p>
      <CopyRightStyleVersionStyle>Client v{pkjson.version}</CopyRightStyleVersionStyle>
      <CopyRightStyleVersionStyle>© {new Date().getFullYear()} <StandOutFont>Sage AF</StandOutFont> LLC. All Rights Reserved</CopyRightStyleVersionStyle>
      <p> </p>
    </FooterNavStyle>
  </FooterContainerStyle>
);

const NewFooter = () => (
  <FooterContainerStyle>
    <FooterNavStyle>
      <ul>
        <li><a href="#">Terms of Use</a></li>
        <li><span>|</span></li>
        <li><a href="#">Sitemap</a></li>
        <li><span>|</span></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
      </ul>
      <p> </p>
      <CopyRightStyleVersionStyle>Client v{pkjson.version}</CopyRightStyleVersionStyle>
      <CopyRightStyleVersionStyle>© {new Date().getFullYear()} <StandOutFont>Sage AF</StandOutFont> LLC. All Rights Reserved</CopyRightStyleVersionStyle>
      <p> </p>
    </FooterNavStyle>
  </FooterContainerStyle>
);

export default Footer
