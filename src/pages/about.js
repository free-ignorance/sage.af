import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


const PreStyle = styled.div`
  margin: auto;
  margin-bottom: 1rem;
	text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title='Sage AF - All About Us' />
    <PreStyle>
			<h2>All About Us</h2>
			<p>We are a Calm Cool Collective focusing on spiritual healing and wellness products. Shop our curated homemade products, beauty picks, and all our wellness essentials. Our incredibly high standards prevent us from making profits, but that doesn't mean you can't enjoy our creations with us. We absolutly do not do designer brands but create everyday essentials.</p>
			<h1>Our Journey</h1>
			<p>copy</p>
			<h2>Want to Try us out?</h2>
			<p>Currently we are still looking for spiritually like minded people to give free gifts to. We would like you to sign up and in 1 week you will get to assemble your own gift pack totall free. <Link to='/signup'>Sign up here!</Link></p>
			<h2>Let Us Know What you Think</h2>
			<p>We only ask you let us know how it was by going over to our <Link to='/signup'>Feed Back Page</Link>.</p>
	  </PreStyle>
  </Layout>
)

export default AboutPage
