import { Component, createComponent, createElem } from "../common/index.js";

class NewButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newButton = createElem({
      name: "a",
      class: ["new-btn", "btn"],
      attr: [
        {
          name: "href",
          value: "/new",
        },
      ],
    });
    const newImage = createElem({
      name: "img",
      attr: [
        {
          name: "src",
          value: "/src/assets/new-icon.svg",
        },
        {
          name: "alt",
          value: "작성 버튼",
        },
      ],
    });
    newButton.append(newImage);

    return newButton;
  }
}

export default NewButton;
