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

export const bookingRoomApi = (data) => {
  const { token } = JSON.parse(localStorage.getItem("userLogin"));
  return axiosApi.post("/api/rooms/booking", data, {
    headers: {
      token,
    },
  });
};