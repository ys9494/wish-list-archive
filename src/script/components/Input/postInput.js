import { Component, createComponent, createElem } from "../common/index.js";
import { SubmitButton, LinkButton } from "../Button/index.js";

/**
 * @param String placeholder
 * @param String tag
 * @param String type
 * @param String name
 * @param Function callback - change event
 */
export default class PostInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const postInput = createElem({
      name: this.props.tag,
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
      ],
      event: {
        name: "change",
        callback: this.props.callback,
      },
    });

    return postInput;
  }
}
