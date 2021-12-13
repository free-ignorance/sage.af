/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled,{ createGlobalStyle }  from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
// import Footer from './footer';
import './layout.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBF3E4;
  }
`;

const LayoutContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  margin-top:
  margin: 0;
  padding: 0;
  background-color: #FBF3E4;
  position: relative;
  text-align: center;
`;

const LayoutStyle = styled.div`
  margin: auto;
  width: 100%;
  font-size: 10px;
  background-color: #FBF3E4;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <LayoutContainerStyle>
    <GlobalStyle/>
      <LayoutStyle>
      <Header/>
        <main>{children}</main>
      </LayoutStyle>
    </LayoutContainerStyle>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
