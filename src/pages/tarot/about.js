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
			title="Sage AF - Tarot About Page"
			description= "Tarot About Page"
    />
    <PreStyle>
			<h2>Frequently Asked Questions</h2>
      <Link to='/about'>About Us</Link>
      <h3>what is tarot?</h3>
      <p>
      A tarot reading is a form of cartomancy, or divination, whereby practitioners use tarot cards to help self-reflect, connect with their inner self, meditate, and problem-solve. They formulate a subject or focus, sometimes an intent, then draw cards to interpret random meanings applied to the subject. Some suggest the practice can help to gain insight by applying random alturnative perspectives to an issue and the practitioner explores and reflects on their issue with a different set of eyes. Ultimately Tarot is a tool for self reflection and discovery. It is not a tool for predicting the future.
      </p>
      <h3>I am afaid of my reading results, should I be concerned?</h3>
      <p>
      It is important to understand that the greatest power for change in your own life comes from within. The reading has no more power over your universe than you have given it. A mirror that scares you should not be to blame for your fears. 
      </p>
      <h3>Can you tell me more about tarot Card Decks?</h3>
      <p>
        Tarot cards are a deck of 78 cards divided into two main categories: the Major Arcana and the Minor Arcana. The Major Arcana consists of 22 cards that represent universal archetypes and life experiences, such as the Fool, the Magician, the High Priestess, the Emperor, the Empress, the Chariot, and so on. The Minor Arcana consists of 56 cards that are divided into four suits: Wands, Cups, Swords, and Pentacles. These suits represent the different aspects of our everyday lives, such as our thoughts, feelings, actions, and material world.
      </p>
      <p>
        Tarot cards can be drawn in either a forward or reversed position. The position of the card can affect its interpretation. In general, forward cards represent the positive aspects of the card's meaning. They suggest that the energy of the card is flowing freely and openly in the client's life. Reversed cards represent the negative aspects of the card's meaning. They suggest that the energy of the card is blocked or restricted in some way. This could be due to a variety of factors, such as fear, resistance, or denial.
      </p>
      <p>
        It is important to note that tarot readings are not meant to predict the future. Instead, they offer a snapshot of the present moment perspective from yourself to reflect on what meaning you draw at this current time. Even the same cards drawn two different times can have immensely different impact on someone depending their life sitiation. These resflections and discoveries help us define ourselfs and think of exturnal perspectives. The Person recieving a Tarot Reading is ultimately responsible for making their own choices and creating their own future.
      </p>
			<p><br /></p>
	  </PreStyle>
  </Layout>
)

export default TarotPage
