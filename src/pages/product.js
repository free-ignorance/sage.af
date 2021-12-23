import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PreStyle = styled.div`
	text-align: center;
	display: flex;
`;

const LeftSide = styled.div`
	flex: 50%;
	width: 100%;
	padding-left: 2rem;
	padding-right: 2rem;
`;

const RightSide = styled.div`
	flex: 50%;
	width: 100%;
	padding-left: 2rem;
	padding-right: 2rem;
`;

const ProductPage = () => (
  <Layout>
    <SEO title='Sage AF - Product Page' />
    <PreStyle>
			<LeftSide>
				<img src="https://static8.depositphotos.com/1377527/943/i/600/depositphotos_9431737-stock-photo-portrait-of-gray-striped-cat.jpg" />
			</LeftSide>
			<RightSide>
				<h1>Product Title</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</RightSide>
	  </PreStyle>
  </Layout>
)

export default ProductPage
