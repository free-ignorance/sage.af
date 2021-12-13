import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


const PreStyle = styled.div`
  a {
    text-decoration: none;
    color: #66cc66;
  }
`;

const SignupPage = () => (
  <Layout>
    <SEO title='Sage AF - Signup Page' />
    <PreStyle>
      <br/>
			<p>Would you like a gift?</p>

    </PreStyle>
  </Layout>
)

export default SignupPage
