import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoHeader from '../components/content/video/VideoHeader';

const ViewPortWrapper = styled.div`
  height: 100vh;
  margin: 0;
  overflow-y: hidden;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Sage AF - Disrupting your Chakras"
      description="We are a Calm Cool Collective focusing on spiritual healing and wellness products. Our curated shop has a selection of homemade products, beauty picks, and wellness essentials. Our high standards prevent us from making profits, as we just want you to feel good about you. Pick an assortment to enjoy on us!"
      meta={[]}
    />
    <ViewPortWrapper>
      <VideoHeader
        title="Inner Peace"
        subTitle="Discover"
      />
    </ViewPortWrapper>
  </Layout>
)

export default IndexPage
