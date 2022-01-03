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
			description="We are a Calm Cool Collective focusing on spiritual healing and wellness products. Our curated shop has a selection of homemade products, beauty picks, and wellness essentials. Our high standards prevent us from making profits, as we just want you to feel good about you. Pick an assortment to enjoy on us!"
    />
    <PreStyle>
			<h2>All About Us</h2>
			<p>We are a Calm Cool Collective focusing on spiritual healing and wellness products. Our curated shop has a selection of homemade products, beauty picks, and wellness necessities. Our high standards prevent us from making profits, as we just want you to feel good about you. Pick an assortment to enjoy on us! </p>
			<h1>Want to Try us out?</h1>
			<p>Go to our <Link to='/signup'>Sign Up Page</Link> for some free homemade essentials. All options are free of charged & will be shipped free to your provided address.</p>
			<h2>Let Us Know What you Think</h2>
			<p>Let us know what your think by providing feedback on our <Link to='/signup'>Feed Back Page</Link>, its the only payment we ask.</p>
			<p><br /></p>
	  </PreStyle>
  </Layout>
)

export default AboutPage
