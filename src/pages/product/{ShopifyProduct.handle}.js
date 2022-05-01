import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import isEqual from "lodash.isequal";
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import Layout from '../../components/layout';
import { NumericInput } from "../../components/form/NumericInput"
import { AddToCart } from "../../components/cart/AddToCart"
import SEO from '../../components/seo';
import {formatPrice, getCurrencySymbol } from '../../utils/format-price'
import { StoreContext } from "../../context/store-context"

const PreStyle = styled.div`
	text-align: center;
	display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Breadcrumb = styled.div`

`;

const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  font-weight: 300;
  @media (max-width: 768px) {
    flex: 100%;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

const AddToCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid #ccc;
`;

const PriceCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const ProductPrice = styled.div`
  line-height: 2rem;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  color: #B91646;
`;

const NoImagePreview = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const ScrollForMore = styled.div`
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

  let imageSource  = `${getSrc(firstImage)}`;
  imageSource  = imageSource.split("http://sage.af").join('');
  imageSource  = imageSource.split("https://sage.af").join('');
  const theImage = {
    src: imageSource,
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
            <ProductImageWrapper>
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
                <ScrollForMore id="instructions">
                  <span aria-hidden="true">←</span> scroll for more{" "}
                  <span aria-hidden="true">→</span>
                </ScrollForMore>
              )}
            </ProductImageWrapper>
          )}
          {!hasImages && (
            <NoImagePreview>No Preview image</NoImagePreview>
          )}
        </LeftSide>
        <RightSide>
          <Breadcrumb>{product.productType}</Breadcrumb>
          <h1>{title}</h1>
          <ProductDescription dangerouslySetInnerHTML={{__html: descriptionHtml}}></ProductDescription>
          <PriceCartWrapper>
            <ProductPrice>{price}</ProductPrice>
            <AddToCartWrapper>
              <NumericInput
                aria-label="Quantity"
                onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                onChange={(event) => setQuantity(event.currentTarget.value)}
                value={quantity}
                min="1"
                max="20"
              />
              <AddToCart
                variantId={productVariant.storefrontId}
                quantity={quantity}
                available={available}
              />
            </AddToCartWrapper>
          </PriceCartWrapper>

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
