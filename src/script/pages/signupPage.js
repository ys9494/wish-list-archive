import {
  Component,
  createComponent,
  createElem,
} from "../components/common/index.js";
import { SubmitButton } from "../components/Button/index.js";
import { AuthInput } from "../components/Input/index.js";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  async submitSignup(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const nick = event.target.nickname.value;
    const password = event.target.password.value;

    const bodyData = {email, nick, password}
  
    await fetch(`http://127.0.0.1:8002/auth/join`,{
      method: "POST",
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
  }).then(res=>res).then(res=>console.log('res', res)).catch(error=>console.log(error))
  }

  render() {
    console.log("signup page renders");
    this.mainElement = createElem({ name: "main", class: ["signup-page"] });

    const signupWrapper = createElem({
      name: "form",
      class: ["signup-wrapper"],
      event: {
        name: "submit",
        callback: this.submitSignup,
      },
    });

    const emailInput = createComponent(AuthInput, {
      innerText: "EMAIL ADDRESS",
      type: "email",
      name: "email",
      class: "email-input",
      placeholder: "이메일을 입력하세요",
    });

    const nickNameInput = createComponent(AuthInput, {
      innerText: "NICKNAME",
      type: "text",
      name: "nickname",
      class: "nickname-input",
      placeholder: "닉네임을 입력하세요",
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
      text: "SIGNUP",
    });

    const goToLogin = createElem({
      name: "a",
      class: ["login-from-signup"],
      innerText: "로그인 하러가기",
      attr: [
        {
          name: "href",
          value: "/login",
        },
      ],
    });

    signupWrapper.append(
      emailInput,
      nickNameInput,
      passwordInput,
      submitButton,
      goToLogin
    );
    this.mainElement.append(signupWrapper);

    return this.mainElement;
  }
}
