import axiosApi from ".";

export const signUpApi = (userRegister) => {
  return axiosApi.post("/api/auth/register", userRegister);
};

export const signInApi = (userLogin) => {
  return axiosApi.post("/api/auth/login", userLogin);
};
