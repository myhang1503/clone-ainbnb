<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    style="background-image: url(images/bg-login.webp)"
    tabindex="-1"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Sign Up</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Register -->
              <div class="tab-content" id="tab2">
                <form class="register" @submit.prevent="handleSubmit">
                  <p class="form-row form-row-wide">
                    <label for="username2"
                      >Username:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        v-model="userRegister.name"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Email Address:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                        v-model="userRegister.email"
                      />
                    </label>
                  </p>
<p class="form-row form-row-wide">
                    <label for="password1"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                        v-model="userRegister.password"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password2"
                      >Repeat Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                        v-model="userRegister.repeatPassword"
                      />
                    </label>
                  </p>
                  <p class="form-row form-row-wide">
                    <label for="phone"
                      >Phone:
                      <i class="im im-icon-Phone-3G"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="phone"
                        id="phone"
                        v-model="userRegister.phone"
                      />
                    </label>
                  </p>
                  <p class="form-row form-row-wide">
                    <label for="birthday"
                      >Birthday:
                      <div style="display: flex">
                        <select class="chosen-select-no-single" v-model="userRegister.year">
                          <option label="Year">Year</option>
                          <option v-for="(year, index) in arrayYear" :key="index">{{year}}</option>
                        </select>

                        <select class="chosen-select-no-single" v-model="userRegister.month">
                          <option label="Month">Month</option>
                          <option v-for="(month, index) in arrayMonth" :key="index">{{month}}</option>
                        </select>

                        <select class="chosen-select-no-single" v-model="userRegister.day">
                          <option label="Day">Day</option>
                          <option v-for="(day, index) in arrayDay" :key="index">{{day}}</option>
                        </select>
                      </div>
                    </label>
                  </p>

<p class="form-row form-row-wide">
                    <label for="gender"
                      >Gender:
                      <select class="chosen-select-no-single" v-model="userRegister.gender">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                    </label>
                  </p>

<p class="form-row form-row-wide">
                    <label for="address"
                      >Address:
                      <i class="im im-icon-Location-2"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="address"
                        id="address"
                        v-model="userRegister.address"
                      />
                    </label>
                  </p>
                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="register"
                    value="Register"
                  />
                </form>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import {createArrayNumber} from "../utils/createArrayNumber";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const store = useStore();
    const router = useRouter();
    const arrayMonth = createArrayNumber(1,12);
    const arrayYear = createArrayNumber(1970,2024);
    const arrayDay = createArrayNumber(1,31);
    const userRegister = reactive({
      "name": "",
  "email": "k",
  "password": "",
  "repeatPassword": "",
  "phone": "",
  "year": "",
  "month": "",
  "day": "",
  "birthday": "",
  "gender": true,
  "address": ""
    });
    const handleSubmit = () => {
      if (userRegister.password === userRegister.repeatPassword){
        const data = {
                    name: userRegister.name,
                email: userRegister.email,
                password: userRegister.password,
                phone: userRegister.phone,
                birthday: `${userRegister.year}/${userRegister.month}/${userRegister.day}`,
                gender: (userRegister.gender === "Male"), //male = true, female = false
                address: userRegister.address
                  };
                  store.dispatch("auth/signUpAction",{data, router});
      } else {
        alert("Password not match");
      }
    };
    
    return {
      arrayMonth,
      arrayYear,
      arrayDay,
      userRegister,
      handleSubmit
    }
  }
};
</script>

<style lang="scss">
.my-bg {
  top: 0px;
  position: absolute;
  height: 100vh;
  overflow: scroll;
}
</style>
