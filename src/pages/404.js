import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'

const PreStyle = styled.div`
  margin: auto;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
		<PreStyle>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</PreStyle>

  </Layout>
)

export default NotFoundPage
