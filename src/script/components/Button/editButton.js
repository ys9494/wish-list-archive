import { Component, createComponent, createElem } from "../common/index.js";

class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const editButton = createElem({
      name: "span",
      class: ["edit-btn", "btn"],
    });
    const editImage = createElem({
      name: "img",
      attr: [
        {
          name: "src",
          value: "/src/assets/edit-icon.svg",
        },
        {
          name: "alt",
          value: "수정 버튼",
        },
      ],
    });

    editButton.append(editImage);

    return editButton;
  }
}

export default EditButton;
