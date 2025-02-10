"use client"

import { useState } from "react"
import CartList from "@/components/CartList"

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Inception", price: 9.99 },
    { id: 2, title: "The Shawshank Redemption", price: 7.99 },
  ])

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <CartList items={cartItems} onRemove={removeFromCart} />
      <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
    </div>
  )
}

