import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import SEO from '../components/seo';

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

const AboutPage = () => (
  <Layout>
		<SEO
			title="Sage AF - All About Us"
			description=""
    />
    <PreStyle>
			<h2>All About Us</h2>

      <Link to='/tarot/about'>About Tarot</Link>

			<p><br /></p>
	  </PreStyle>
  </Layout>
)

export default AboutPage
