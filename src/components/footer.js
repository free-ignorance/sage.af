import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Scheme from "./style";
const pkjson = require("../../package.json");

const FooterContainerStyle = styled.div`
  width: 100%;
  height: 128px;
  padding-top: 2rem;
  position: relative;
  text-align: center;
  background-image: url('https://i.ibb.co/syrq9p7/clouds-removebg-preview.png');
  background-repeat: no-repeat;
  background-position: center bottom;
`;

const FooterNavStyle = styled.footer`
  width: 100%;
  font-size: 10px;
  color: ${Scheme.colors.purple.hex};
  line-height: 1.1 rem;
  margin: auto;


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
      color: ${Scheme.colors.purple.hex};
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

// 

const StandOutFont = styled.span`
  font-family: 'Homemade Apple';
  font-weight: 700;
  color: ${Scheme.colors.red.hex};
	padding: 0.5rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  font-size: 1.2rem;
`;

const CopyRightStyleVersionStyle = styled.div`
  font-size: 10px;
  color: ${Scheme.colors.purple.hex};
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
        <li><Link to="/terms">Terms of Use</Link></li>
        <li><span>|</span></li>
        <li><a href="#">Sitemap</a></li>
        <li><span>|</span></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
      </ul>
      <CopyRightStyleVersionStyle>©{new Date().getFullYear()} <StandOutFont>Sage af</StandOutFont> LLC. All Rights Reserved. Client: v{pkjson.version}</CopyRightStyleVersionStyle>
    </FooterNavStyle>
  </FooterContainerStyle>
);

export default Footer
