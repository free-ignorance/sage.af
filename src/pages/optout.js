import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 * This page will allow users to have their account deleted, not have a package shipped and destroy all information about them.
 */
const PreStyle = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  max-witdh: 36rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 36rem;
  }
`;

const OptoutPage = () => (
  <Layout>
    <SEO title='Sage AF - Delete Account' />
    <PreStyle>
      <br/>
      <h2>Account Deletion</h2>
      <p>No judgment, we want you to have full irrivokable consent and say of what is done with your data. That includes the right for all record of you to be removed from our databases and all records deleted. </p>
      <h1>Soon...</h1>
      <p>We are trying to finish authenticating user account deletion. Please in the mean time just email me.</p>
    </PreStyle>
  </Layout>
)

export default OptoutPage
