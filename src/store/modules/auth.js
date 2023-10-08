import { signUpApi, signInApi } from "../../api/auth";
const state = () => {
  return {
    userRegister: {},
    userLogin: {},
  };
};
const mutations = {
  setUserRegisterMutation(state, payload) {
    state.userRegister = payload;
  },
  setUserLoginMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
};
const actions = {
  async signUpAction(context, { data, router }) {
    const userRegister = await signUpApi(data);
    router.push("/sign-in");
    //console.log(data);
    context.commit("setUserRegisterMutation", userRegister);
  },
  async signInAction(context, { data, router }) {
    try {
      const userLogin = await signInApi(data);
      router.push("/");
      //console.log(data);
      context.commit("setUserLoginMutation", userLogin);
    } catch (error) {
      alert("Incorrect.");
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
