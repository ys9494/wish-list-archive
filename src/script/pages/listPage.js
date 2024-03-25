import {
  Component,
  createComponent,
  createElem,
} from "../components/common/index.js";
import { WishItem } from "../components/WishList/index.js";
import { NewButton } from "../components/Button/index.js";

export default class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoaded: false,
    };
  }


  setLoadingFalse() {
    console.log('load')
    this.setState({...this.state, isLoaded: false});
  }

  render() {
    console.log("list page renders", this.state.isLoaded);
    if(!this.state.isLoaded) {
      if(!localStorage.getItem('wishlist')) {
        const wishlist = [
          {
            id: 1,
            title: "나이키 에어포스",
            content: "화이트 / 13.9",
            img: "/src/public/img/airforce.webp",
            link: "https://www.nike.com/kr/t/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb/CW2288-111",
          },
          {
            id: 2,
            title: "살로몬 스티드크로스",
            content: "무신사",
            img: "/src/public/img/salomon.jpg",
            link: "https://www.musinsa.com/app/goods/2958137?loc=goods_rank",
          },
          { 
            id: 3, 
            title: "무탠다드 기본 티셔츠", 
            content: "화이트, 블랙 2pack 세트", 
            img: "/src/public/img/musinsa.jpg", 
            link:"https://www.musinsa.com/app/goods/2034137" 
          },
          {
            id: 4,
            title: "나이키 웨이스트백",
            content: "블랙",
            img: "",
            link: "https://www.nike.com/kr/t/%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%80-%EC%9B%A8%EC%9D%B4%EC%8A%A4%ED%8A%B8%ED%8C%A9-eBjH1nm3/DB0488-010",
          },
          {
            id: 5,
            title: "모니터암",
            content: "카멜마운트 GDA3 고든 디자인 모니터 거치대 모니터암",
            img: "/src/public/img/monitor.png",
            link: "https://smartstore.naver.com/micap/products/8063774453?n_media=27758&n_query=%EB%AA%A8%EB%8B%88%ED%84%B0%EA%B1%B0%EC%B9%98%EB%8C%80&n_rank=1&n_ad_group=grp-a001-02-000000001271363&n_ad=nad-a001-02-000000243179894&n_campaign_type=2&n_mall_id=micap&n_mall_pid=8063774453&n_ad_group_type=2&NaPm=ct%3Dljicstu8%7Cci%3D0zi0003EATTybNodI1pW%7Ctr%3Dpla%7Chk%3D16bcf7bad3a6c17788ef573885fa3ad06b400bf8",
          },
        ]
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
        this.setState({ isLoaded: true, list: wishlist})
        console.log('setItem', this.state.list);
      } else {
        this.setState({ isLoaded: true, list: JSON.parse(localStorage.getItem('wishlist'))})
        console.log('getItem', this.state.list)  
      }
    }


    this.mainElement = createElem({
      name: "main",
      class: ["list-page"],
    });

    const wishList = createElem({
      name: "div",
      class: ["list"],
    });

    this.state.list.slice().reverse().map((item) => {
      const wishItem = createComponent(WishItem, {...item, setLoadingFalse: this.setLoadingFalse.bind(this)});
      wishList.append(wishItem);
    });

    const newButtonWrapper = createElem({
      name: "div",
      class: ["new-btn-wrapper"],
    });

    const newButton = createComponent(NewButton, {});
    newButtonWrapper.append(newButton);

    this.mainElement.append(wishList, newButtonWrapper);

    return this.mainElement;
  }
}
