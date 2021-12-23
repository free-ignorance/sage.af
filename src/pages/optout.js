import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


/**
 * This page will allow users to have their account deleted, not have a package shipped and destroy all information about them.
 */

const PreStyle = styled.div`

	border: 0.5rem solid #DFD8CA;
	padding: 2rem;
  a {
    text-decoration: none;
    color: #105652;
  }

	p {
		text-align: justify;
  	text-justify: inter-word;
		text-indent: 2rem;
	}
`;

const StandOutFont = styled.h2`
  color: #B91646;
  font-family: 'Amatic SC';
  font-weight: 700;
  font-size: 2rem;
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
