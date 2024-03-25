class Component {
  constructor(props) {
    this.props = props;
  }

  // state 변경
  setState(newState) {
    this.state = newState;
    this.updater();
  }

  //리렌더링
  updater() {
    const rendered = this.render();
    console.log("last", this.lastRendered);
    if (this.lastRendered) {
      this.lastRendered.replaceWith(rendered);
      this.lastRendered = rendered;
    }
  }

  render() {
    throw new Error("no render");
  }

  // 최초 렌더링
  initialize() {
    const rendered = this.render();
    this.lastRendered = rendered;

    return rendered;
  }
}

export default Component;
