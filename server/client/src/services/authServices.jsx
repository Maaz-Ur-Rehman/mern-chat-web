// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:4000/api/user/",
//   }),
//   tagTypes: ["User"],
//   endpoints: (build) => ({
//     signUp: build.mutation({
//       query: (userData) => ({
//         url: `signup`,
//         method: "POST",
//         body: userData,
//       }),
//       transformResponse: (response) => response.data,
//       transformErrorResponse: (response) => response.status,
//     }),
//     Login: build.mutation({
//       query: (userData) => ({
//         url: `login`,
//         method: "POST",
//         body: userData,
//       }),
//       transformResponse: (response) => response,
//       transformErrorResponse: (response) => response.status,
//     }),
//     logout: build.mutation({
//       query: () => ({
//         url: `logout`,
//         method: "GET",
//       }),
//       transformResponse: (response) => response.data,
//       transformErrorResponse: (response) => response.status,
//     }),
//   }),
// });

// export const { useSignUpMutation, useLoginMutation, useLogoutMutation } =
//   authApi;
// export default authApi;
