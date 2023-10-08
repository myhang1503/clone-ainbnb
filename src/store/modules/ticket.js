import { getTicketListByUserApi } from "../../api/ticket";

const state = () => {
  return {
    roomsByUser: [],
  };
};
const mutations = {
  setTicketListByUserMutation(state, payload) {
    const data = payload.map((item) => ({
      _id: item.id,
      checkIn: item.checkIn,
      checkOut: item.checkOut,
      ...item.roomId,
    }));
    state.roomsByUser = data;
  },
};
const actions = {
  async getTicketListByUserAction(context, payload) {
    const data = await getTicketListByUserApi(payload);
    context.commit("setTicketListByUserMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
