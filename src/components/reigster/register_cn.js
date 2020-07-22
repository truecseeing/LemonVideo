import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Form, Input, Button, Checkbox,ConfigProvider} from 'antd';
import Register from './register.js'
import 'moment/locale/zh-cn'
moment.locale('zh-cn');
class Registercn extends React.Component{
 constructor(props)
 {
     super(props)
 }
 render(){
     return(
<ConfigProvider locale={zh_CN}><Register/></ConfigProvider>
     )
 }
}
export default Registercn