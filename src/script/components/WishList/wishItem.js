import { Component, createComponent, createElem } from "../common/index.js";
import {
  DeleteButton,
  EditButton,
  LinkButton,
  NewButton,
  SubmitButton,
} from "../Button/index.js";
import { ItemImage, ItemLink } from "./index.js";

class WishItem extends Component {
  constructor(props) {
    super(props);
  }

  goToLink() {
    const link = this.props.link;
    window.open(link);
  }

  handleDelete() {
    console.log('delete', this.props.id)    
    const list = JSON.parse(localStorage.getItem('wishlist'));
    const newlist = list.filter((item) => item.id != this.props.id)
    console.log({list, newlist})
    localStorage.setItem('wishlist', JSON.stringify(newlist))

    this.props.setLoadingFalse()
  }

  render() {
    const wishItemContainer = createElem({
      name: "article",
      class: ["wish-item-container"],
    });

    const wishItem = createElem({
      name: "div",
      class: ["wish-item"],
    });

    const itemInfoWrapper = createElem({
      name: "div",
      class: ["item-info-wrapper"],
    });

    /** image */
    const imageContainer = createComponent(ItemImage, {
      img: this.props.img ? this.props.img : "",
      title: this.props.title,
    });

    /** detail */

    const itemInfo = createElem({ name: "div", class: ["item-info"] });

    const itemDetail = createElem({ name: "div", class: ["item-detail"] });
    const itemTitle = createElem({ name: "h3", innerText: this.props.title });
    const itemContent = createElem({
      name: "p",
      innerText: this.props.content ? this.props.content : "",
    });
    itemDetail.append(itemTitle, itemContent);

    itemInfo.append(itemDetail);

    /** link */
    if (this.props.link) {
      const linkWrapper = createComponent(ItemLink, { link: this.props.link });
      itemInfo.append(linkWrapper);
    }

    itemInfoWrapper.append(imageContainer, itemInfo);

    /** edit */
    const editWrapper = createElem({
      name: "a",
      class: ["edit-btn-wrapper"],
      attr: [
        {
          name: "href",
          value: `/edit/${this.props.id}`,
        },
      ],
    });
    const editButton = createComponent(EditButton, { id: this.props.id });
    editWrapper.append(editButton);

    /** delete */
    const deleteBtnContainer = createElem({
      name: "div",
      class: ["delete-btn-container"],
    });
    const deleteButton = createComponent(DeleteButton, { id: this.props.id, callback: this.handleDelete.bind(this) });
    deleteBtnContainer.append(deleteButton);

    wishItem.append(itemInfoWrapper, editWrapper);
    wishItemContainer.append(wishItem, deleteBtnContainer);
    return wishItemContainer;
  }
}

export default WishItem;
