import { Component, createComponent, createElem } from "../common/index.js";
import { LinkButton } from "../Button/index.js";

class ItemLink extends Component {
  constructor(props) {
    super(props);
  }

  goToLink() {
    const link = this.props.link;
    window.open(link);
  }

  render() {
    const linkWrapper = createElem({
      name: "div",
      class: ["link-wrapper"],
      event: {
        name: "click",
        callback: this.goToLink.bind(this),
      },
    });

    const linkButton = createComponent(LinkButton, {});

    const linkTextWrapper = createElem({
      name: "div",
      class: ["link-text-wrapper"],
    });
    const linkText = createElem({
      name: "span",
      class: ["link-text"],
      innerText: this.props.link,
    });
    linkTextWrapper.append(linkText);

    linkWrapper.append(linkButton, linkTextWrapper);
    return linkWrapper;
  }
}

export default ItemLink;
