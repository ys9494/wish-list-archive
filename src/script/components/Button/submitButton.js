import { Component, createComponent, createElem } from "../common/index.js";

class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const submitButton = createElem({
      name: "button",
      class: ["btn", "submit-btn", this.props.btnClass],
      innerText: this.props.text,
      event: {
        name: "click",
        callback: this.props.callback,
      },
      attr: [
        {
          name: "type",
          value: "submit",
        },
      ],
    });

    return submitButton;
  }
}

export default SubmitButton;
