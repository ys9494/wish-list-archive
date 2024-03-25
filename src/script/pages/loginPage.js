import {
  Component,
  createComponent,
  createElem,
} from "../components/common/index.js";
import { SubmitButton } from "../components/Button/index.js";
import { AuthInput } from "../components/Input/index.js";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  submitLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("login", email, password);
  }

  render() {
    console.log("login page renders");
    this.mainElement = createElem({ name: "main", class: ["login-page"] });

    const LoginWrapper = createElem({
      name: "form",
      class: ["login-wrapper"],
      event: {
        name: "submit",
        callback: this.submitLogin,
      },
    });

    const emailInput = createComponent(AuthInput, {
      innerText: "EMAIL ADDRESS",
      type: "email",
      name: "email",
      class: "email-input",
      placeholder: "이메일을 입력하세요",
    });

    const passwordInput = createComponent(AuthInput, {
      innerText: "PASSWORD",
      type: "password",
      name: "password",
      class: "password-input",
      placeholder: "비밀번호를 입력하세요",
    });

    const submitButton = createComponent(SubmitButton, {
      btnClass: "sign-btn",
      text: "LOGIN",
    });

    const goToSignup = createElem({
      name: "a",
      class: ["signup-from-login"],
      innerText: "회원가입 하러가기",
      attr: [
        {
          name: "href",
          value: "/signup",
        },
      ],
    });

    LoginWrapper.append(emailInput, passwordInput, submitButton, goToSignup);

    this.mainElement.append(LoginWrapper);

    return this.mainElement;
  }
}
