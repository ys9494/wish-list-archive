import Router from "./router/router.js";
import {
  ListPage,
  LoginPage,
  SignupPage,
  LogoutPage,
  PostPage,
  NotFoundPage,
} from "./pages/index.js";

const setup = () => {
    const el = '#root';

    const router = new Router({
      "/": ListPage,
      "/signup": SignupPage,
      "/login": LoginPage,
      "/logout": LogoutPage,
      "/new": PostPage,
      "/edit/:id": PostPage,
      404: NotFoundPage,
    });

    router.init(el);
}

setup()

