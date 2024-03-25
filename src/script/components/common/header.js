import { Component, createComponent, createElem } from "./index.js";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = createElem({ name: "header" });
    const logo = createElem({
      name: "a",
      class: ["go-to-login"],
      attr: {
        name: "href",
        value: "/login",
      },
    });
    const logoImage = createElem({
      name: "img",
      attr: {
        name: "src",
        value: "/src/assets/user-icon.svg",
      },
    });

    return submitButton;
  }
}

export default Header;

<header>
  <h1 id="logo">WISH LIST ARCHIVE</h1>
  <div id="go-to-login">
    <a href="/login">
      <img src="/src/assets/user-icon.svg" alt="로그인" />
    </a>
  </div>
</header>;
