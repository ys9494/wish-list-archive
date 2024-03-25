import {
  Component,
  createComponent,
  createElem,
} from "../components/common/index.js";

export default class NotFoundPage extends Component {
  render() {
    console.log("404");
    this.mainElement = document.createElement("main");
    this.mainElement.classList.add("not-found");

    const notFoundText = createElem({
      name: "h1",
      class: ["not-found-text"],
      innerText: "404 | 페이지를 찾을 수 없습니다.",
    });

    this.mainElement.append(notFoundText);

    return this.mainElement;
  }
}
