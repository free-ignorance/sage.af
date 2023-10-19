import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import Layout from '../../components/layout';
import Card from '../../components/cards/Card';
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
function CardsPage({ params }) {
  const id = params[`*`];
  return (
    <Layout>
      <SEO
        title="Sage AF - Cards Page"
        description= "Cards Page"
      />
      <PreStyle>
        <Card id={id} />
        <p><br /></p>
      </PreStyle>
    </Layout>
  )
}

export default CardsPage
