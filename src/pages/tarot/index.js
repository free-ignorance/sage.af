import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import Spread from '../../components/cards/Spread'; 

const PreStyle = styled.div`
  text-align: center;
  max-witdh: 36rem;
  margin: auto;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  p {
    margin: auto;
    text-align: center;
    padding: 0.5rem;
  }

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
      <p>Think of a question or central topic in your mind before continueing.<br />
      The deck has been shuffled, 3 cards off the top have been dealt.<br />
      Reveal and flip the cards from left to right, consider the card's meaning in relation to your central question or topic. </p>

      <p><br /></p>
      <Spread />
      <p><br /></p>

      <p> 
        <Link to='/tarot/about'>Read more about Tarot</Link>
      </p>
	  </PreStyle>
  </Layout>
)

export default TarotPage
