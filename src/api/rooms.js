import axiosApi from ".";

export const getRoomListByLocationApi = (locationId) => {
  return axiosApi.get(`/api/rooms?locationId=${locationId}`);
};
