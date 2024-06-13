import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'http://akasite.ddns.net:61080'

export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Users', 'Employees', 'Employee', 'Services', 'Image'],
    baseQuery: fetchBaseQuery({
        baseUrl,
        headers: {
            'Cache-Control': 'no-cache'
        }
    }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => 'data',
        }),
    }),
});