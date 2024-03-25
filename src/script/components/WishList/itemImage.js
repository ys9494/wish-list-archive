import { Component, createComponent, createElem } from "../common/index.js";

class ItemImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageContainer = createElem({
      name: "div",
      class: ["wish-item", "image-container"],
    });
    const image = createElem({
      name: "img",
      class: ["wish-image"],
      attr: [
        {
          name: "src",
          value: this.props.img,
        },
        {
          name: "alt",
          value: `${this.props.title} 사진`,
        },
      ],
    });

    if (this.props.img !== "") {
      imageContainer.append(image);
    }

    return imageContainer;
  }
}

export default ItemImage;
