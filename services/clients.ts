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

    getAllClients: builder.query<IResponse, number>({
      query: (page = 1) => `api/collections/clients/records?page=${page}&perPage=15`
    }),
    getFilterClients: builder.query<IResponse, string>({
      query: (param = '') => `api/collections/clients/records?filter=(name~'${param}' || email~'${param}')`
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllClientsQuery, useGetFilterClientsQuery } = clientsApi;