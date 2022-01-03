import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 * Collection Page will display a group of products currated by the editor
 * Example Collection pages are (Home, Body, Spirit, Accessories, etc)
 */

const PreStyle = styled.div`
	height: 100%;
	display: flex;
`;
const CollectionWrapper = styled.div`

`;

const ControlPanel = styled.div`
	flex: 20%;
	text-align: center;
`;

const CollectionGrid = styled.div`
	flex: 80%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(100px, auto);
`;
const GridCard = styled.div`
	grid-column-start: 1;
	grid-column-end: 4;
	display: contents;
	text-align: center;

	img {
    width: 80%;
    object-fit: contain;
		margin-bottom: -1rem;
	}
`;

const CollectionPage = () => (
  <Layout>
    <SEO
		title='Sage AF - '
		/>
    <PreStyle>
			<ControlPanel>
				<h2> left control Panel</h2>
				<p>... for product selection </p>
			</ControlPanel>
			<CollectionGrid>
				<GridCard>
					<div>
						<img src="https://static8.depositphotos.com/1377527/943/i/600/depositphotos_9431737-stock-photo-portrait-of-gray-striped-cat.jpg" />
						<h2>product 1 title</h2>
					</div>
				</GridCard>
				<GridCard>
					<div>
						<img src="https://static8.depositphotos.com/1377527/943/i/600/depositphotos_9431737-stock-photo-portrait-of-gray-striped-cat.jpg" />
						<h2>product 2 title</h2>
					</div>
				</GridCard>
				<GridCard>
					<div>
						<img src="https://static8.depositphotos.com/1377527/943/i/600/depositphotos_9431737-stock-photo-portrait-of-gray-striped-cat.jpg" />
						<h2>product 3 title</h2>
					</div>
				</GridCard>
				<GridCard>
					<div>
						<img src="https://static8.depositphotos.com/1377527/943/i/600/depositphotos_9431737-stock-photo-portrait-of-gray-striped-cat.jpg" />
						<h2>product 4 title</h2>
					</div>
				</GridCard>
				<GridCard>
					<div>
						<img src="https://static8.depositphotos.com/1377527/943/i/600/depositphotos_9431737-stock-photo-portrait-of-gray-striped-cat.jpg" />
						<h2>product 5 title</h2>
					</div>
				</GridCard>
				<GridCard>
					<div>
						<img src="https://static8.depositphotos.com/1377527/943/i/600/depositphotos_9431737-stock-photo-portrait-of-gray-striped-cat.jpg" />
						<h2>product 6 title</h2>
					</div>
				</GridCard>
			</CollectionGrid>
	  </PreStyle>
  </Layout>
)

export default CollectionPage
