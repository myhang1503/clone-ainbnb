import axiosApi from ".";

export const getRoomListByLocationApi = (locationId) => {
  return axiosApi.get(`/api/rooms?locationId=${locationId}`);
};

export const getRoomDetailApi = (roomId) => {
  return axiosApi.get(`/api/rooms/${roomId}`);
};

export const getRoomReviewApi = (roomId) => {
  return axiosApi.get(`/api/reviews/byRoom?roomId=${roomId}`);
};