import React from "react";
import PropTypes from "prop-types";
import styled,{ createGlobalStyle }  from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { CookiesProvider } from "react-cookie";

import Scheme from "./style";
import Header from "./header";
import Footer from "./footer";

import "./layout.css";

const GLOBAL_BACKGROUND_COLOR = Scheme.colors.background.hex;
const GLOBAL_LINK_COLOR = Scheme.colors.yellow.hex;
const GLOBAL_PRIMARY_ACCENT_COLOR = Scheme.colors.yellow.hex;
const GLOBAL_SECONDARY_ACCENT_COLOR = Scheme.colors.red.hex;
const GLOBAL_TRINARY_ACCENT_COLOR = Scheme.colors.blue.hex;

// const GLOBAL_BACKGROUND_COLOR = "#FDFAF5";
// const GLOBAL_LINK_COLOR = "#105652";
// const GLOBAL_PRIMARY_ACCENT_COLOR = "#B91646";
// const GLOBAL_SECONDARY_ACCENT_COLOR = "#105652";
// const GLOBAL_TRINARY_ACCENT_COLOR = "#FBF3E4";

const GlobalStyle = createGlobalStyle`
  body {

    background-color: ${GLOBAL_BACKGROUND_COLOR};

  }

  p {
    color: ${Scheme.colors.purple.hex};
    text-align: justify;
    text-justify: inter-word;
    text-indent: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Homemade Apple';
    font-weight: 700;
    text-shadow: 0 0 1px rgba(100,100,100,0.5);
  }

  h1 {
    color: ${GLOBAL_PRIMARY_ACCENT_COLOR};
    font-size: 3rem;
  }

  h2 {
    color: ${GLOBAL_SECONDARY_ACCENT_COLOR};
    font-size: 2rem;
  }

  h3 {
    color: ${GLOBAL_TRINARY_ACCENT_COLOR};
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${GLOBAL_LINK_COLOR};
  }
`;

const LayoutContainerStyle = styled.div`
  width: 100%;
  font-family: "Spectral", Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, sans-serif;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  background-image: url('https://i.ibb.co/N3tXZtt/left.png');
  background-repeat: no-repeat;
  background-position: left bottom;
`;

const LayoutStyle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-image: url('https://i.ibb.co/1mJb1PF/right.png');
  background-repeat: no-repeat;
  background-position: right bottom;
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
  `);

  return (
    <CookiesProvider>
      <GlobalStyle/>
      <LayoutContainerStyle>
        <LayoutStyle>
          <Header />
            <main>{children}</main>
          <Footer/>
        </LayoutStyle>
      </LayoutContainerStyle>
    </CookiesProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
