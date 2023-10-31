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

const BotAboutPage = () => (
  <Layout>
		<SEO
			title="Sage AF - All About Our Bot"
			description=""
    />
    <PreStyle>
			<h2>All About Our Bot</h2>

      <p>Our api is used by our organization's slack bot. <a href="https://sage.af/about/bot">Sage Bot</a> which is used to provide tarot readings to your slack channels. </p>
      <p>
        <img src="https://github.com/free-ignorance/soothsaying/assets/127320/439132a1-376f-4cbf-929d-8b2a672d931f" alt="Image of Example response of the bot in slack" />
      </p>
      <p>You can always add the bot to your slack workspace by clicking the button below.</p>
      <p>
        <a href="https://slack.com/oauth/v2/authorize?client_id=780455873664.6087369520707&scope=commands&user_scope=">
          <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
        </a>
      </p>
      <Link to='/tarot/about'>About Tarot</Link>
      

			<p><br /></p>
	  </PreStyle>
  </Layout>
)

export default BotAboutPage
