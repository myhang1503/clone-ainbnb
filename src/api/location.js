// import axios from "axios";
// export const getLocationListApi = (location) => {
//   return axios.get(
//     `https://airbnb.cybersoft.edu.vn/api/locations?location=${location}`,
//     {
//       headers: {
//         tokenByClass:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI",
//       },
//     }
//   );
// };

import axiosApi from ".";
export const getLocationListApi = (location) => {
  return axiosApi.get(`/api/locations?location=${location}`);
};
