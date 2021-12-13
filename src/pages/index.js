import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PreStyle = styled.div`
  a {
    text-decoration: none;
    color: #105652;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Sage AF' />
    <PreStyle>
      <br/>

    </PreStyle>
  </Layout>
)

export default IndexPage
