import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Product } from "../types/"

const SERVER_URL = import.meta.env.VITE_SERVER_URL
const SERVER_API = import.meta.env.VITE_SERVER_API

const baseUrl = `${SERVER_URL}${SERVER_API}`

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: build => ({
    getAllProducts: build.query<Product[], void>({
      query: () => "products",
      providesTags: result =>
        result ? result.map(({ _id }) => ({ type: "Products", _id })) : [],
    }),
  })
})

export const {
  useGetAllProductsQuery,
} = productApi