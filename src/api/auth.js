import axiosApi from ".";

export const signUpApi = (userRegister) => {
  return axiosApi.post("/api/auth/register", userRegister);
};
