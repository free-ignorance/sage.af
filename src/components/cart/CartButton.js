import * as React from "react"
import { Link } from "gatsby"
import {CartIcon} from "./Icon"

export function CartButton({ quantity }) {
  return (
    <Link
      aria-label={`Shopping Cart with ${quantity} items`}
      to="/"
    >
      <CartIcon />
      {quantity > 0 && <div >{quantity}</div>}
    </Link>
  )
}