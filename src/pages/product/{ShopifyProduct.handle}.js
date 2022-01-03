import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import isEqual from "lodash.isequal";
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import {formatPrice, getCurrencySymbol } from '../../utils/format-price'
import { StoreContext } from "../../context/store-context"

const PreStyle = styled.div`
	text-align: center;
	display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const ProductDescription = styled.div`
  flex: 60%;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #000;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  @media (max-width: 768px) {
    flex: 100%;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

const noImagePreview = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const scrollForMore = styled.div`
  text-align: center;
  margin-top: 1rem;
  display: none;
  transform: translate3d(-50%, 0px, 0px);
  left: 50%;
  position: absolute;
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


const productImageWrapper = styled.div`
  position: relative;
`;

const container = styled.div`
`;

const productImageList  = styled.ul`
  display: flex;
  overflow-x: auto;
`;

const productImageListItem = styled.li`
  display: flex;
  flex: 0 0 100%;
  white-space: nowrap;
`;


const ProductPage = ({ data: { product } })  =>{
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
    descriptionHtml,
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

  const iamgeSorce  = `${getSrc(firstImage)}`;
  const lol = iamgeSorce.split("http://sage.af").join('');
  const theImage = {
    src: lol.split("https://sage.af").join(''),
    width: firstImage.width || 255,
    height: firstImage.height || 255,
  }
  return (
    <Layout>
      <SEO
        title={`Sage AF - ${product.title}`}
        description={product.description}
        image={theImage}
      />
      <PreStyle>
        <LeftSide>
        {hasImages && (
            <productImageWrapper>
              <div
                role="group"
                aria-label="gallery"
                aria-describedby="instructions"
              >
                <productImageList>
                  {images.map((image, index) => (
                    <productImageListItem
                      key={`product-image-${image.id}`}
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
                    </productImageListItem>
                  ))}
                </productImageList>
              </div>
              {hasMultipleImages && (
                <scrollForMore id="instructions">
                  <span aria-hidden="true">←</span> scroll for more{" "}
                  <span aria-hidden="true">→</span>
                </scrollForMore>
              )}
            </productImageWrapper>
          )}
          {!hasImages && (
            <span className={noImagePreview}>No Preview image</span>
          )}
        </LeftSide>
        <RightSide>
          <h1>{title}</h1>
          <ProductDescription dangerouslySetInnerHTML={{__html: descriptionHtml}}></ProductDescription>
        </RightSide>
      </PreStyle>
    </Layout>
  )
}


export const query = graphql`
  query($id: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      title
      description,
      descriptionHtml,
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
  }
`
export default ProductPage
