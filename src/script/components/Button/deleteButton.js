import { Component, createComponent, createElem } from "../common/index.js";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const deleteButton = createElem({
      name: "button",
      class: ["delete-btn", "btn"],
      event: {
        name: "click",
        callback: this.props.callback
      },
    });

    const deleteImage = createElem({
      name: "img",
      attr: [
        {
          name: "src",
          value: "/src/assets/trash-icon.svg",
        },
        {
          name: "alt",
          value: "삭제 버튼",
        },
      ],
    });

    deleteButton.append(deleteImage);

    return deleteButton;
  }
}

export default DeleteButton;
