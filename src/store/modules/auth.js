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
  setUserLoginFromLocalStorage(state, payload) {
    state.userLogin = payload;
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
  loadUserLoginFromLocalStorageAction(context) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    context.commit("setUserLoginFromLocalStorage", userLogin);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
