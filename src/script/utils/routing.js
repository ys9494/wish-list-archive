/**
 *
 * @param {Class} Component
 * @param {{}} props
 * @returns
 */


const createComponent = (Component, props) => {
    const component = new Component(props);
    return component.initialize();
  };
  
  export default createComponent;
  

window.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      e.preventDefault();
      this.routePush(e.target.closest("a").href);
    }
});


