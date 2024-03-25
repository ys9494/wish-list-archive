import { Component, createComponent, createElem } from "../common/index.js";

class LinkButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const linkButton = createElem({
      name: "span",
      class: ["link-btn", "btn"],
    });

    const linkImage = createElem({
      name: "img",
      attr: [
        {
          name: "src",
          value: "/src/assets/link-icon.svg",
        },
        {
          name: "alt",
          value: "링크 버튼",
        },
      ],
    });

    linkButton.append(linkImage);

    return linkButton;
  }
}

export default LinkButton;
