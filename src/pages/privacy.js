
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 * This page will detail that we will not use their personal information, and it will self destruct in idono, like 30 days.
 */
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

const PrivacyPage = () => (
  <Layout>
    <SEO
      title="Sage AF - Your Privacy Matters"
      description="We do not sell, trade, or rent your personal information to others; read our whole privacy policy to know just how much you matter to us."
    />
    <PreStyle>
      <br/>
			<h2>Your Privacy Matters</h2>
			<p>We collect no personal data from our users except on account creation, and what we do collect, we delete after we ship items. The Collection of your data is entered into shopify system for shipping and tracking only. We are not a business that is accepting public orders at this time, and intend to destroy all customer generated accounts 30 days after orders have been completed and or by the Feb 20th 2022 Cutoff date. On Feb 20th 2022 all customer information and order information will be removed from the shop, and the shop will be reset. Our API transmits data oneway into shopify, and follows secure transport end to end. Our datapolicy is the <a href='https://www.patheos.com/blogs/wakeupcall/2017/07/sage-advice-from-the-14th-dalai-lama/'>don't be a jerk</a> policy.</p>
			<p>Your Account and Data Can be deleted after signup at anypoint on our <Link to='/optout'>Delete Account Page</Link>, which will delete all customer information from the shopify shop, and remove your email from future promotions.</p>
		</PreStyle>
  </Layout>
)

export default PrivacyPage
