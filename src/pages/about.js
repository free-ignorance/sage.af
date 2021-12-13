import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


/**
 * This page will allow users to have their account deleted, not have a package shipped and destroy all information about them.
 */

const PreStyle = styled.div`

	border: 1rem solid #DFD8CA;
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

const Logo = styled.h2`
  color: #B91646;
  font-family: 'Amatic SC';
  font-weight: 700;
  font-size: 2rem;
`;

const AboutPage = () => (
  <Layout>
    <SEO title='Sage AF - All About Us' />
    <PreStyle>
      <br/>
			<Logo>All About Us</Logo>
			<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
			<Logo>Our Story</Logo>
			<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
			<Logo>Let Us Know What you Think</Logo>
			<p>Contact Us Page</p>
	  </PreStyle>
  </Layout>
)

export default AboutPage
