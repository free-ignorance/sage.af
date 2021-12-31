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

const IndexPage = () => (
  <Layout>
    <SEO
      title="Sage AF - Disrupting your Chakras"
      description="We are a Calm Cool Collective focusing on spiritual healing and wellness products. Our curated shop has a selection of homemade products, beauty picks, and wellness essentials. Our high standards prevent us from making profits, as we just want you to feel good about you. Pick an assortment to enjoy on us!"
      meta={[]}
    />
    <PreStyle>
      <br/>
			<h2>Disrupting your Chakras</h2>
			<p></p>
			<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>

    </PreStyle>
  </Layout>
)

export default IndexPage
