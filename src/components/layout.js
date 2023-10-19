import React from "react";
import PropTypes from "prop-types";
import styled,{ createGlobalStyle }  from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { CookiesProvider } from "react-cookie";

import Header from "./header";
import Footer from "./footer";

import "./layout.css";

const GLOBAL_BACKGROUND_COLOR = "#000814";
const GLOBAL_LINK_COLOR = "#ffc300";
const GLOBAL_PRIMARY_ACCENT_COLOR = "#003566";
const GLOBAL_SECONDARY_ACCENT_COLOR = "#003566";
const GLOBAL_TRINARY_ACCENT_COLOR = "#6f1d1b";




// const GLOBAL_BACKGROUND_COLOR = "#FDFAF5";
// const GLOBAL_LINK_COLOR = "#105652";
// const GLOBAL_PRIMARY_ACCENT_COLOR = "#B91646";
// const GLOBAL_SECONDARY_ACCENT_COLOR = "#105652";
// const GLOBAL_TRINARY_ACCENT_COLOR = "#FBF3E4";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${GLOBAL_BACKGROUND_COLOR};
  }
`;

const LayoutContainerStyle = styled.div`
  width: 100%;
  font-family: "Spectral", Consolas, Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, sans-serif;
  background-color: ${GLOBAL_BACKGROUND_COLOR};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;

  p {
    color: #8d99ae;
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

const LayoutStyle = styled.div`
  width: 100%;
  background-color: ${GLOBAL_BACKGROUND_COLOR};
  font-size: 16px;
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
          <Header/>
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
