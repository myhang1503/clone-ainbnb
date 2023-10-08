import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import RoomsView from "../views/RoomsView.vue";
import RoomDetail from "../views/RoomDetail.vue";
import ContactView from "../views/ContactView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import BookingView from "../views/BookingView.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/rooms/:locationId",
    name: "Rooms",
    component: RoomsView,
  },
  {
    path: "/room-detail/:roomId",
    name: "RoomDetail",
    component: RoomDetail,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignInView,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUpView,
  },
  {
    path: "/booking/:roomId",
    name: "Booking",
    component: BookingView,
  },
  {
    path: "/user-profile/:userId",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router
