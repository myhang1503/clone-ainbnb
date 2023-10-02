<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input id="autocomplete-input" type="text" placeholder="Location" v-model="keyword"/>
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <ul v-if="locationList.length > 0 && keyword" class="list-location">
        <li v-for="(location, index) in locationList" :key="index" @click="handleClickLocation(location)">
            <span class="im im-icon-Location-2"></span>
            <span class="location-item-title">{{location.name}}</span>
        </li>
      </ul>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router";
export default {
  setup(){
    const keyword = ref(""); //luu lai thong tin input tren man hinh
    const store = useStore();
    const router = useRouter();
    
    watch(keyword,(newKeyword) => {
      store.dispatch("location/getLocationListAction", newKeyword);
    });
    
    //get data tu store
    const locationList = computed(() => store.state.location.locationList);
    
    const handleClickLocation = (location) => {
      console.log(location);
      router.push(`/rooms/${location._id}`);
    }
    return{
      locationList,
      keyword,
      handleClickLocation
    }
  },
};
</script>

<style lang="scss">
.main-search-input-item.location{
    position: relative; //cha
    .list-location{
        position: absolute; //con
        top: 150%;
        list-style: none;
        background: #ffffff;
        color: #222;
        width: 100%;
        border-radius: 10px;
        padding: 7px;
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        li{
            padding: 10px;
            font-size: 20px;
            &:hover{
                cursor: pointer;
                background: #f7f7f7;
            }
            .location-item-title {
                margin-left: 10px;
            }
        }
    }
}
</style>
