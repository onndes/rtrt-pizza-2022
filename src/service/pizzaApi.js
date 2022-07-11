import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62bdb91fc5ad14c110c5676f.mockapi.io/',
    }),
    tagTypes: ['Pizza'],
    endpoints: (builder) => ({
        getPizzas: builder.query({
            query: () => `items/`,
        }),
    }),
    invalidatesTags: ['Pizza'],
})

export const { useGetPizzasQuery } = pizzaApi
