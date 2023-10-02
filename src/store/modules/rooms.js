import { getRoomListByLocationApi } from "../../api/rooms";

const state = () => {
  return {
    roomList: [],
  };
};
const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
};
const actions = {
  async getRoomListAction(context, payload) {
    const data = await getRoomListByLocationApi(payload);
    context.commit("setRoomListMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
