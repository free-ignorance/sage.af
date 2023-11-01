import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Scheme from "../components/style";


const PreStyle = styled.div`
  text-align: center;
  width: 100%;
	height: 600px;
  padding-left: 2rem;
  padding-right: 2rem;
  max-witdh: 36rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 36rem;
  }
`;

const ViewPortWrapper = styled.div`
.wrapper {
	position: absolute;
  left: 0;
	display: block;
	width: 500px;
	height: 500px;
	margin: calc(50vh - 250px) calc(50vw - 250px);
  transition:2s ease;
}

.arc:before, .arc:after {
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;
	border: 4px solid #000;
	top: -4px;
	left: -4px;
	border-color: ${Scheme.colors.blue.hex} transparent transparent transparent;
	border-radius: 50%;

	z-index: -8;
	content: "";
}

.arc:after{
	border-color:transparent transparent ${Scheme.colors.red.hex} transparent;
}

.arc {
	position: absolute;
	display: block;
	width: 85%;
	height: 85%;
	margin: 7.5%;
	border-radius: 50%;
	animation: 15s rotate linear infinite;
  box-shadow: 0px 0px 0px 2px #fff2;
}

@keyframes rotate {
	0% {
		transform: rotate(90deg);
	} 100% {
		transform: rotate(810deg);
	}
}
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Sage AF - Disrupting your Chakras"
      description="We are a Calm Cool Collective focusing on spiritual healing and wellness."
    />
    <PreStyle>
    <ViewPortWrapper>
  <div class="wrapper">
    <div class="arc"><div class="arc"><div class="arc"><div class="arc"><div class="arc"><div class="arc"></div></div></div></div></div>
    </div></div>
  </ViewPortWrapper>
    </PreStyle>
  </Layout>
)

export default IndexPage
