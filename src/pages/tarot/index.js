import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

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

const TarotPage = () => (
  <Layout>
		<SEO
			title="Sage AF - Tarot Reading"
			description= "A simple Tarot Reading"
    />
    <PreStyle>
			<h2>tarot</h2>


			<p><br /></p>
	  </PreStyle>
  </Layout>
)

export default TarotPage
