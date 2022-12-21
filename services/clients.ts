import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IClient } from '@/interfaces/IClient.type';

export interface IClientQueryResponse {
  page: number,
  perPage: number,
  totalItems: number,
  totalPages: number,
  items: IClient[]
}

export interface IClientMutationResponse extends IClient {
  error?: object,
  data?: {
    collectionId?: string
    collectionName?: string
    created?: string
    updated?: string
  }
}

// Define a service using a base URL and expected endpoints
export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.api }),
  tagTypes: ['Client'],
  endpoints: (builder) => ({

    getAllClients: builder.query<IClientQueryResponse, number>({
      query: (page = 1, perPage = 15) => `api/collections/clients/records?page=${page}&perPage=${perPage}&sort=-created,id`,
      providesTags: ['Client'],
    }),
    getFilterClients: builder.query<IClientQueryResponse, string>({
      query: (param = '') => `api/collections/clients/records?filter=(name~'${param}' || email~'${param}')&sort=-created,id`,
      providesTags: ['Client'],
    }),

    addClient: builder.mutation<IClientMutationResponse, IClient>({
      query: (client: IClient) => ({
        url: 'api/collections/clients/records',
        method: "post",
        body: client
      }),
      invalidatesTags :['Client']
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllClientsQuery, useGetFilterClientsQuery, useAddClientMutation } = clientsApi;