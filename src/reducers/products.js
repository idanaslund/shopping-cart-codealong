import { createSlice } from "@reduxjs/toolkit";

const productData = [
    { id: 1, title: 'Socks', price: 100 },
    { id: 2, title: 'T-shirt', price: 200 },
    { id: 3, title: 'Pants', price: 350 },
    { id: 4, title: 'Dress', price: 550 }
]

export const products = createSlice({
    name: 'products',
    initialState: productData
})