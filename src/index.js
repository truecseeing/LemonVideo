import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './Home'*/
import App from './App'
import * as serviceWorker from './serviceWorker';
import { Form, Input, Button, Checkbox,ConfigProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { BrowserRouter as Router, Route } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/zh-cn'
import VideoPage from './components/videoPage/VideoPage.js'
moment.locale('zh-cn');
ReactDOM.render(

  <App></App>
  // <VideoPage/>

  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
