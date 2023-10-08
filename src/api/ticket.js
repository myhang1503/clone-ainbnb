import axiosApi from ".";

export const getTicketListByUserApi = (UserId) => {
  return axiosApi.get(`/api/tickets/by-user?userId=${UserId}`);
};
