import { ReducerType } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import build from "next/dist/build"
// opportunities/search
export const jobApi = createApi({
    reducerPath: "transactionDash",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://akil-backend.onrender.com",
    }),

    endpoints : (builder) => ({
        getAllJobs : builder.query({
            query: (token :string) => ({
                url: "opportunities/search",
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        }),
        getBoookmarks : builder.query({
            query: (token :string) => ({
                url: "bookmarks",
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        }),
    })
 
})

export const {
    useGetAllJobsQuery,
    useGetBoookmarksQuery,
} = jobApi