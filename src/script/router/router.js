export default class Router {
  constructor(routes) {
    if (!routes) {
      console.error("routes initialize failed, no routes");
    }
    this.routes = routes;

    this.routeParam = {};
    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(":") > -1) {
        const [_, routeName, param] = key.split("/");

        this.routeParam[routeName] = param.replace(":", "");

        console.log("param key: ", this.routeParam[routeName]);

        this.routes["/" + routeName] = route;

        delete this.routes[key];
      }
    }
  }

  init(rootElementId) {
    if (!rootElementId) {
      console.error("routes initialize failed, no rootElementId");
      return null;
    }

    this.rootElementId = rootElementId;
    this.routing(window.location.pathname);

    /** a 태그 클릭시 pushState  */
    window.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        e.preventDefault();
        this.routePush(e.target.closest("a").href);
      }
    });

    // 라우팅
    window.routing = (path) => this.routePush(path);

    /** 뒤로가기 눌럿을 때 */
    window.onpopstate = () => this.routing(window.location.pathname);
  }

  /** a 태그 클릭시 pushState  */
  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname);
  }

  /** pathname 파싱 후에 렌더링 */
  routing(pathname) {
    const [_, routeName, param] = pathname.split("/");

    let page = "";

    // /detail/:id
    if (this.routes[pathname]) {
      const component = new this.routes[pathname]();

      /** 페이지 렌더링 */
      page = component.initialize();
    } else if (param) {
      const routeParam = {};
      routeParam[this.routeParam[routeName]] = param;

      console.log(
        "param key: ",
        this.routeParam[routeName],
        ", param value: ",
        param,
        ", routeParam: ",
        routeParam
      );

      const component = new this.routes["/" + routeName](routeParam);

      /** 페이지 렌더링 */
      page = component.initialize();
    } else {
      const component = new this.routes["404"]();
      page = component.initialize();
      console.log("route", routeName, param, this.routes[pathname]);
    }

    if (page) {
      /** router 내부 렌더링 함수 */
      this.render(page);
    }
  }

  /** 현재 페이지에 렌더링 된 것들 다 지우고 새로 렌더링 */
  render(page) {
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = "";

    rootElement.appendChild(page);
  }
}
