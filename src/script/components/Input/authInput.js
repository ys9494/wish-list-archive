import { Component, createComponent, createElem } from "../common/index.js";
import { SubmitButton, LinkButton } from "../Button/index.js";

/**
 * @param String innerText
 * @param String placeholder
 * @param String type
 * @param String name
 * @param Function callback - change event
 */
export default class AuthInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const authInputWrapper = createElem({
      name: "label",
      class: ["auth-input-wrapper"],
      innerText: this.props.innerText,
    });

    const authInput = createElem({
      name: "input",
      class: [this.props.class],
      attr: [
        { name: "placeholder", value: this.props.placeholder },
        {
          name: "type",
          value: this.props.type,
        },
        {
          name: "name",
          value: this.props.name,
        },
        {
          name: "required",
          value: "",
        },
      ],
      event: {
        name: "change",
        callback: this.props.callback,
      },
    });

    authInputWrapper.append(authInput);

    return authInputWrapper;
  }
}
