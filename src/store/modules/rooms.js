import { getRoomListByLocationApi, getRoomDetailApi } from "../../api/rooms";

const state = () => {
  return {
    roomList: [],
    roomDetail: {},
  };
};
const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  },
};
const actions = {
  async getRoomListAction(context, payload) {
    const data = await getRoomListByLocationApi(payload);
    context.commit("setRoomListMutation", data);
  },
  async getRoomDetailAction({ commit }, payload) {
    const roomDetail = await getRoomDetailApi(payload);
    commit("setRoomDetailMutation", roomDetail);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
