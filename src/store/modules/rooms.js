import {
  getRoomListByLocationApi,
  getRoomDetailApi,
  getRoomReviewApi,
  bookingRoomApi,
} from "../../api/rooms";

const state = () => {
  return {
    roomList: [],
    roomDetail: {},
    roomReview: [],
  };
};
const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  },
  setRoomReviewMutation(state, payload) {
    state.roomReview = payload;
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
  async getRoomReviewAction(context, payload) {
    const roomReview = await getRoomReviewApi(payload);
    context.commit("setRoomReviewMutation", roomReview);
  },
  async bookingRoomAction(context, payload) {
    const data = await bookingRoomApi(payload);

    console.log(data);
    console.log(context);
    //context.commit("setUserRegisterMutation", userRegister);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
