/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav2 from './Nav2';
import Banner1 from './Banner1';
import Content13 from './Content13';
import Content5 from './Content5';
import Footer1 from './Footer1';
import RankList from '../components/ranklist/RankList.js'
import Login from "../components/login/login.js";

import {
  Nav22DataSource,
  Banner10DataSource,
  Content130DataSource,
  Content50DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import axios from 'axios'
/*import {getHotSearch} from '../action/homeAction.js'*/

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  //热搜模块 主页热门视频
  getHotSearch = () => {
    new Promise((resolve, reject) => {
      axios.get("http://118.31.58.177/LemonCinema/video/heat")
        .then(res => {
          resolve(res.data)
          if (res.data.code == 0) {
            console.log("获取热搜模块视频成功")
            console.log(res.data)
            alert("拉取数据成功")
            //res.data.data.vid
            //res.data.data.name
            //res.data.data.imagePath
            //res.data.data.videoPath
          }
        }).catch(err => {
          reject(err.data)
        })
    })
  }

  componentWillMount() {
    //this.getHotSearch()
  }
  componentWillUnmount() {

  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */

    this.getHotSearch()
  }

  render() {
    const children = [
      <Nav2
        id="Nav2_2"
        key="Nav2_2"
        dataSource={Nav22DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <div className='hotvideo'>
        <Content5
          id="Content5_0"
          key="Content5_0"
          dataSource={Content50DataSource}
          isMobile={this.state.isMobile}
        />
        <RankList ></RankList>
      </div>,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Login />
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
