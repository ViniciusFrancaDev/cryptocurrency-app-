import create from '@ant-design/icons/lib/components/IconFont';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': '<YOUR_HOST>',
  'x-rapidapi-key': '<YOUR_KEY>'
};

const baseUrl = '<YOUR_URL>';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi;
