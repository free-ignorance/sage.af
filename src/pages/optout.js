import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


/**
 * This page will allow users to have their account deleted, not have a package shipped and destroy all information about them.
 */

const PreStyle = styled.div`
  a {
    text-decoration: none;
    color: #66cc66;
  }
`;

const OptoutPage = () => (
  <Layout>
    <SEO title='Sage AF - Delete Account' />
    <PreStyle>
      <br/>
			<p>Would you like to delete your account?</p>

    </PreStyle>
  </Layout>
)

export default OptoutPage
