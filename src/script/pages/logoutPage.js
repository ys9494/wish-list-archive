import {
  Component,
  createComponent,
  createElem,
} from "../components/common/index.js";
import { SubmitButton } from "../components/Button/index.js";

export default class LogoutPage extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    console.log("logout", this);
  }

  render() {
    console.log("login page renders");
    this.mainElement = createElem({ name: "main", class: ["logout-page"] });

    const LogoutWrapper = createElem({
      name: "div",
      class: ["logout-wrapper"],
      innerHTML: `<span>로그아웃 하시겠습니까?</span>`,
    });

    const submitButton = createComponent(SubmitButton, {
      btnClass: "sign-btn",
      text: "LOGOUT",
      callback: this.handleLogout.bind(this),
    });

    LogoutWrapper.append(submitButton);

    this.mainElement.append(LogoutWrapper);

    return this.mainElement;
  }
}
