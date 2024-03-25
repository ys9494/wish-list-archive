/**
 * @description 아래 요소들을 key로 하는 객체를 넣어주세요
 * @param String name
 * @param String[] class
 * @param String innerText
 * @param String innerHTML
 * @param String event.name
 * @param Function event.callback
 * @returns
 */

const createElem = (elem) => {
  const element = document.createElement(elem.name);

  if (elem.class) {
    const classJoin = elem.class.join(" ");
    element.setAttribute("class", classJoin);
  }

  if (elem.attr && elem.attr.length > 0) {
    elem.attr.forEach(({ name, value }) => {
      element.setAttribute(name, value);
    });
  }

  if (elem.innerText) {
    element.innerText = elem.innerText;
  }

  if (elem.innerHTML) {
    element.innerHTML = elem.innerHTML;
  }

  if (elem.event) {
    element.addEventListener(elem.event.name, elem.event.callback);
  }

  return element;
};

export default createElem;
