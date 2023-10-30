import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import Spread from '../../components/cards/Spread'; 

const PreStyle = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;

`;

const TarotPage = () => (
  <Layout>
		<SEO
			title="Sage AF - Tarot Reading"
			description= "A simple Tarot Reading"
    />
    <PreStyle>
			<h2>tarot</h2>
      
      <Spread />
      <p><br /></p>
      <Link to='/tarot/about'>Read more about Tarot</Link>
      
	  </PreStyle>
  </Layout>
)

export default TarotPage
