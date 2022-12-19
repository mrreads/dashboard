import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IClient } from '@/interfaces/IClient.type';

export interface IResponse {
  page: number,
  perPage: number,
  totalItems: number,
  totalPages: number,
  items: IClient[]
}

// Define a service using a base URL and expected endpoints
export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.api }),
  endpoints: (builder) => ({

    getAllClients: builder.query<IResponse, void>({
      query: () => `api/collections/clients/records`,
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllClientsQuery } = clientsApi;