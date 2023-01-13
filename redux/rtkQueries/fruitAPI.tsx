import { apiSlice } from "../slices/apiSlice";

const fruitApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getFruits: builder.query({
      query: (data:any) => ({
        url: "/fruits",
        method: "GET",
      }),
      providesTags: ["fruits"]
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
      invalidatesTags: ["fruits"]

    }),

    
    deleteFruit: builder.mutation({
      query: (id: string) => ({
        method: "DELETE",
        url: `/fruit/del/${id}`,
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["fruits"]
    }),


  }),
});


export const {useAddFruitMutation, useDeleteFruitMutation, useGetFruitsQuery} = fruitApi;