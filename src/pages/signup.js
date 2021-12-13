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

const SignupPage = () => (
  <Layout>
    <SEO title='Sage AF - Signup Page' />
    <PreStyle>
      <br/>
			<p>Would you like a gift?</p>
      <p>You can view our <Link to='/privacy'>privacy statement</Link>.</p>

    </PreStyle>
  </Layout>
)

export default SignupPage