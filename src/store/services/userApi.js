import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api/'
    }),
    endpoints: (build) => ({
        getUsersData: build.query({
            query: (page) => `users?page=${page}`
        }),
        createUser: build.mutation({
            query: (newUser) => ({
                url: '/users',
                method: "POST",
                body: newUser
            })
        })
    }),
    refetchOnReconnect: true,
    refetchOnFocus: true,
    keepUnusedDataFor: 30,
})

console.log(userApi)
export const {useGetUsersDataQuery, useCreateUserMutation} = userApi