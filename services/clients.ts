
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IClient } from './../pages/api/clients';

// Define a service using a base URL and expected endpoints
export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.api }),
  endpoints: (builder) => ({

    getAllClients: builder.query<IClient[], void>({
      query: () => `clients`,
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllClientsQuery } = clientsApi;