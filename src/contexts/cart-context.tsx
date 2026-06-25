"use client"

import React, { createContext, useContext, useReducer, useEffect } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  size: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; size: string; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return []
  try {
    const saved = localStorage.getItem('louzie-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveCartToStorage = (items: CartItem[]) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('louzie-cart', JSON.stringify(items))
  } catch {}
}

const calculateTotals = (items: CartItem[]) => {
  if (!items || items.length === 0) {
    return { totalItems: 0, totalPrice: 0 }
  }
  
  return items.reduce(
    (acc, item) => {
      const quantity = item?.quantity || 0
      const price = item?.price || 0
      return {
        totalItems: acc.totalItems + quantity,
        totalPrice: acc.totalPrice + price * quantity,
      }
    },
    { totalItems: 0, totalPrice: 0 }
  )
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0,
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'LOAD_CART': {
      const validItems = Array.isArray(action.payload) 
        ? action.payload.filter(item => item && typeof item.quantity === 'number')
        : []
      const totals = calculateTotals(validItems)
      return { ...state, items: validItems, ...totals }
    }

    case 'ADD_ITEM': {
      const newItem = action.payload
      if (!newItem || !newItem.id) return state

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      )

      let newItems: CartItem[]
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newItems = [...state.items, { ...newItem, quantity: 1 }]
      }

      saveCartToStorage(newItems)
      const totals = calculateTotals(newItems)
      return { ...state, items: newItems, ...totals, isOpen: true }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        (item) => !(item.id === action.payload.id && item.size === action.payload.size)
      )
      saveCartToStorage(newItems)
      const totals = calculateTotals(newItems)
      return { ...state, items: newItems, ...totals }
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items
        .map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
      saveCartToStorage(newItems)
      const totals = calculateTotals(newItems)
      return { ...state, items: newItems, ...totals }
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }

    case 'CLOSE_CART':
      return { ...state, isOpen: false }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const savedItems = loadCartFromStorage()
    if (savedItems.length > 0) {
      dispatch({ type: 'LOAD_CART', payload: savedItems })
    }
  }, [])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}