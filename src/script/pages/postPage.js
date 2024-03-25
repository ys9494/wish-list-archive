import {
  Component,
  createComponent,
  createElem,
} from "../components/common/index.js";
import { SubmitButton, LinkButton } from "../components/Button/index.js";
import { PostInput } from "../components/Input/index.js";

export default class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {title: "", content: "", img: "", link: "" },
      isLoaded: false,
    };
    this.getItemData();
  }

  goHome() {
    console.log('home')
    const home = createElem({
      name: "a",
      attr: [
        {
          name: "href",
          value: `/`,
        },
      ],
    });
    home.click();
  }

  /** 정보 가져오기 */
  getItemData() {
    console.log("fetch data");
    console.log("success");
    if (this.props && this.props?.id) {
      const list = JSON.parse(localStorage.getItem('wishlist'));
      const oldItem = list.find((item)=>item.id == this.props.id)
      this.setState({ item: oldItem, isLoaded: true });
    }
  }

  handleImage(event) {
    event.preventDefault();
    console.log("val", URL.createObjectURL(event.target.files[0]));
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    this.setState({
      ...this.state,
      item: { ...this.state.item, img: imgUrl },
    });
    console.log("img", this, event);
  }

  handleSubmit(event) {
    event.preventDefault();
    const list = JSON.parse(localStorage.getItem('wishlist'));
    if (this.props && this.props?.id) {
      const newlist = list.map((item) => item.id == this.props.id ? {id: this.props.id, ...this.state.item} : item)
      localStorage.setItem('wishlist', JSON.stringify(newlist))
    } else {
      const item = {id: Date.now(), ...this.state.item }   
      list.push(item);
      localStorage.setItem('wishlist', JSON.stringify(list))
    }

    this.goHome();
  }

  handleDelete(event) {
    event.preventDefault();
    console.log("삭제", this.props.id);
    const list = JSON.parse(localStorage.getItem('wishlist'));
    const newlist = list.filter((item) => item.id != this.props.id)
    console.log({list, newlist})
    localStorage.setItem('wishlist', JSON.stringify(newlist));
    
    this.goHome();
  }

  handleChange(event) {
    this.state.item[event.target.name] = event.target.value;
  }

  render() {
    console.log("new page renders", this.props);

    this.mainElement = createElem({ name: "main", class: ["post-page"] });

    const postForm = createElem({
      name: "form",
      class: ["post-form"],
      event: {
        name: "submit",
        callback: this.handleSubmit.bind(this),
      },
    });

    /** title & content */
    const titleInput = createComponent(PostInput, {
      tag: "input",
      class: "title-input",
      placeholder: "제목",
      type: "text",
      name: "title",
      callback: this.handleChange.bind(this),
    });
    titleInput.setAttribute("required", "");
    titleInput.setAttribute("maxlength", "20");

    const contentWrapper = createElem({
      name: "div",
      class: ["post-content-wrapper"],
    });
    const contentInput = createComponent(PostInput, {
      tag: "textarea",
      class: "content-input",
      placeholder: "메모를 입력하세요",
      type: "text",
      name: "content",
      callback: this.handleChange.bind(this),
    });
    contentInput.setAttribute("maxlength", "100");

    /** image */
    const imageInputWrapper = createElem({
      name: "div",
      class: ["img-input-wrapper"],
    });
    const imageLabel = createElem({
      name: "label",
      class: ["image-input-label"],
    });
    const labelSpan = createElem({
      name: "span",
      class: ["image-input-label-span"],
      innerText: "사진 업로드",
    });
    const imageInput = createElem({
      name: "input",
      class: ["image-input"],
      attr: [
        { name: "type", value: "file" },
        { name: "accept", value: "image/*" },
      ],
      event: {
        name: "change",
        callback: this.handleImage.bind(this),
      },
    });
    imageLabel.append(labelSpan, imageInput);
    if (this.state.item.img) {
      const imagePreview = createElem({
        name: "img",
        class: ["img-preview"],
        attr: [{ name: "src", value: this.state.item.img }],
      });
      imageInputWrapper.append(imagePreview);
      labelSpan.innerText = "";
    }

    imageInputWrapper.append(imageLabel);
    contentWrapper.append(contentInput, imageInputWrapper);

    /** link */
    const postLinkWrapper = createElem({
      name: "div",
      class: ["post-link-wrapper"],
    });
    const linkButon = createComponent(LinkButton, {});
    const linkInput = createComponent(PostInput, {
      tag: "input",
      class: "link-input",
      placeholder: "링크",
      type: "text",
      name: "link",
      callback: this.handleChange.bind(this),
    });
    postLinkWrapper.append(linkButon, linkInput);

    /** buttons */
    const btnWrapper = createElem({
      name: "div",
      class: ["post-btn-wrapper"],
    });
    const saveBtn = createComponent(SubmitButton, {
      btnClass: "post-save-btn",
      text: "저장",
    });
    btnWrapper.append(saveBtn);
    if (this.props && this.props?.id) {
      const deleteBtn = createComponent(SubmitButton, {
        btnClass: "post-delete-btn",
        callback: this.handleDelete.bind(this),
        text: "삭제",
      });
      btnWrapper.append(deleteBtn);
    }

    titleInput.value = this.state.item.title;
    contentInput.value = this.state.item.content;
    linkInput.value = this.state.item.link;

    postForm.append(titleInput, contentWrapper, postLinkWrapper, btnWrapper);

    this.mainElement.append(postForm);

    return this.mainElement;
  }
}
