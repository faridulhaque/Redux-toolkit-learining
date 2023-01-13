import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useState } from 'react'


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["fruits"],
    endpoints: (build) => ({}) 
})