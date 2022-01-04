import styled from 'styled-components';
import React, { Component }  from 'react';

import { StoreContext } from "../../context/store-context"

const AddToCartButton = styled.button`
	text-align: center;
	cursor: pointer;
	font-family: Lato,sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 14px;
	text-transform: uppercase;
	display: flex;
	flex-direction: row;
	align-self: flex-end;
	align-items: center;
	justify-content: center;
	display: inline-block;
	padding: 8px 20px;
	margin: 0;
	line-height: 1.42;
	text-decoration: none;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	cursor: pointer;
	border: 1px solid transparent;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	border-radius: 2px;
	font-family: Lato,sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 14px;
	text-transform: uppercase;
	-webkit-transition: background-color .2s ease-out;
	-moz-transition: background-color .2s ease-out;
	-ms-transition: background-color .2s ease-out;
	-o-transition: background-color .2s ease-out;
	transition: background-color .2s ease-out;


	:hover {
		box-shadow: var(--shadow);
	}


`;

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <AddToCartButton
      type="submit"
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </AddToCartButton>
  )
}
