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
  max-witdh: 36rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-witdh: 50%;
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
      
      <Spread />
      <p><br /></p>

      <p> 
        <Link to='/tarot/about'>Read more about Tarot</Link>
      </p>
	  </PreStyle>
  </Layout>
)

export default TarotPage
