import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const {
	options,
	variants,
	variants: [initialVariant],
	priceRangeV2,
	title,
	description,
	images,
	images: [firstImage],
} = product
const { client } = React.useContext(StoreContext)

const [variant, setVariant] = React.useState({ ...initialVariant })
const [quantity, setQuantity] = React.useState(1)

const productVariant =
	client.product.helpers.variantForOptions(product, variant) || variant

const [available, setAvailable] = React.useState(
	productVariant.availableForSale
)

const checkAvailablity = React.useCallback(
	(productId) => {
		client.product.fetch(productId).then((fetchedProduct) => {
			const result =
				fetchedProduct?.variants.filter(
					(variant) => variant.id === productVariant.storefrontId
				) ?? []

			if (result.length > 0) {
				setAvailable(result[0].available)
			}
		})
	},
	[productVariant.storefrontId, client.product]
)

const handleOptionChange = (index, event) => {
	const value = event.target.value

	if (value === "") {
		return
	}

	const currentOptions = [...variant.selectedOptions]

	currentOptions[index] = {
		...currentOptions[index],
		value,
	}

	const selectedVariant = variants.find((variant) => {
		return isEqual(currentOptions, variant.selectedOptions)
	})

	setVariant({ ...selectedVariant })
}

React.useEffect(() => {
	checkAvailablity(product.storefrontId)
}, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

const price = formatPrice(
	priceRangeV2.minVariantPrice.currencyCode,
	variant.price
)

const hasVariants = variants.length > 1
const hasImages = images.length > 0
const hasMultipleImages = true || images.length > 1

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



const ProductPage = ({ data: { product, suggestions } }) => (
  <Layout>
	{firstImage ? (
    <SEO title='Sage AF - {title}'
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
					pathname={`/products/${product.handle}`}
        />
				) : undefined}
    <PreStyle>
			<LeftSide>
			<ul className={productImageList}>
				{images.map((image, index) => (
					<li
						key={`product-image-${image.id}`}
						className={productImageListItem}
					>
						<GatsbyImage
							objectFit="contain"
							loading={index === 0 ? "eager" : "lazy"}
							alt={
								image.altText
									? image.altText
									: `Product Image of ${title} #${index + 1}`
							}
							image={image.gatsbyImageData}
						/>
					</li>
				))}
			</ul>
			</LeftSide>
			<RightSide>
				<h1>Product Title</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</RightSide>
	  </PreStyle>
  </Layout>
)

const query = graphql`
  query($id: String!, $productType: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description
      productType
      productTypeSlug: gatsbyPath(
        filePath: "/products/{ShopifyProduct.productType}"
      )
      tags
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      storefrontId
      images {
        # altText
        id
        gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
      }
      variants {
        availableForSale
        storefrontId
        title
        price
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
        id
      }
    }
    suggestions: allShopifyProduct(
      limit: 3
      filter: { productType: { eq: $productType }, id: { ne: $id } }
    ) {
      nodes {
        ...ProductCard
      }
    }
  }
`

export default ProductPage
