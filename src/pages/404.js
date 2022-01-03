import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'

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

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Page Not Found' />
		<PreStyle>
			<h1>404 PAGE NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
		</PreStyle>
  </Layout>
)

export default NotFoundPage
