import { apiSlice } from "../slices/apiSlice";

const fruitApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getFruits: builder.query({
      query: () => ({
        url: "/fruits",
        method: "GET",
      }),
    }),

    addFruit: builder.mutation({
      query: (data: any) => ({
        method: "POST",
        url: "/fruits",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: data,
      }),
    }),

    
    deleteFruit: builder.mutation({
      query: (id: string) => ({
        method: "DELETE",
        url: `fruit/del/${id}`,
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),


  }),
});


export const {useAddFruitMutation, useDeleteFruitMutation, useGetFruitsQuery} = fruitApi;