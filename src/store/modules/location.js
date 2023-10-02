import { getLocationListApi } from "../../api/location";
const state = () => {
  return {
    locationList: [],
  };
};
const mutations = {
  setLocationMutation(state, payload) {
    state.locationList = payload;
  },
};
const actions = {
  async getLocationListAction(context, payload) {
    const data = await getLocationListApi(payload);
    console.log(data);
    context.commit("setLocationMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
