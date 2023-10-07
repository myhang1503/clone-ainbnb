import { signUpApi } from "../../api/auth";
const state = () => {
  return {
    userRegister: {},
  };
};
const mutations = {
  setUserRegisterMutation(state, payload) {
    state.userRegister = payload;
  },
};
const actions = {
  async signUpAction(context, { data, router }) {
    const rs = await signUpApi(data);
    router.push("/sign-in");
    //console.log(data);
    context.commit("setUserRegisterMutation", rs);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
