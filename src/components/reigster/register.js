import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../CSS/register.css'
import {
  Form,
  Input,
  Tooltip,
  DatePicker,
  Icon,
  Select,
  Checkbox,
  Button,
  Radio,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Registertion from '../fuctions/Registertion';
import {withRouter} from "react-router-dom";
import moment from 'moment';
import axios from "axios";
import qs from "qs"
const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  
  
  submitUser =(username,birth,tel,email,password)=>{
    let formData = new FormData();

    formData.append('name', String(username))
    formData.append('password',password)
    formData.append('tel',tel)
    formData.append('birth',birth);
    formData.append('email',email)
    axios.post('http://118.31.58.177/LemonCinema/user',formData,{
        headers:{
            'content-Type':'multipart/form-data'
        },
      })
       .then(response => {
        if(response.status == 200){
          console.log("注册成功!")
          alert("注册成功")
          console.log(response.data)
        }
        console.log(response.code)
        console.log(response.message)
        console.log(response.data)
        console.log(response.data.email)
    }).catch((e)=>{
        console.log(e)
    });
  }


  handleResetClick = e => {
    this.props.form.resetFields();
  };

  compareWidthLastPassword = (rule,value,callback) => {
    const form = this.props.form;
    
    if(value && value !== form.getFieldValue('password')){
      callback('两次输入密码不一致')
      
    }else{
      callback()
    }
  }
  readData=()=>{
    var self =this;
    var data = this.props.form.getFieldsValue();
    var birth = moment(data.birth).format('YYYY-MM-DD');//getFieldsValue 太蠢啦

    console.log('hellowolrd')
    console.log(data.email)
    console.log(data.nickname)
    console.log(birth)
    console.log(data.phone)
    console.log(data.password)

  console.log(this.submitUser)
    this.submitUser(data.nickname,birth,data.phone,data.email,data.password)

  }

  render(){
  
    
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const { getFieldDecorator } = this.props.form;
      //手机号所归属国家区间
      const prefixSelector =getFieldDecorator('prefix', {
        initialValue: '86',
      }) (
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        
      );
    //时间框
    const config = {
        rules: [{ type: 'object', required: true, message: '请选择你的出生日期' }],
    };
    return(
      <div className="register">
          <Form {...formItemLayout} onSubmit={() => {}}>
            <Form.Item
              name="邮箱"
              label="邮箱"
              >{getFieldDecorator('email', {
                rules: [
                    {
                    type: 'email',
                    message: '邮箱格式不对！',
                    },
                    {
                    required: true,
                    message: '邮箱未输入！',
                    },
                ],
                })(<Input/>)}
            </Form.Item>

            <Form.Item
              name="nickname"
              label={
                <span>
                  昵称&nbsp;
                  <Tooltip title="想让小伙伴怎么称呼你?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              >
               {getFieldDecorator('nickname', {rules:[
                {
                  required: true,
                  message: '请输入你的昵称!',
                  whitespace: true
                }
              ],}
            
            )(<Input />)} 
        
            </Form.Item>        
            <Form.Item
              name="password"
              label="密码"
              
            hasFeedback
            >
              {getFieldDecorator("password",{
              rules:[
                {
                  required: true,
                  message: '密码为空',
                },
              {
              min: 6,
              "message": "密码不能少于6个字符"
              },
            ]}
              )(<Input.Password />)}
            </Form.Item> 

            <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={['password']}
              hasFeedback
              >
                {getFieldDecorator("confirm",{
                rules:[
                {
                  required: true,
                  message: '请再次输入密码!',
                },
                {                 
                  validator:this.compareWidthLastPassword
                },
              ]})(<Input.Password />)}
              </Form.Item>

              <Form.Item
                name="phone"
                label="电话号码">
                {getFieldDecorator('phone', {
                  rules: [
                      { required: true, message: '请输入手机号！' },
                      { pattern: /^1[34578]\d{9}$/, message: "手机号格式不正确！"}
                  ],
              })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
              </Form.Item> 

            

              <Form.Item name="birth" label="生日" {...config}>
                {getFieldDecorator('birth',{})(<DatePicker />)}
              </Form.Item>

              
              <Form.Item
                name="agreement"
              > 

              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
            })(
            <Checkbox>
                我已阅读并同意<a href="/">协议</a>
            </Checkbox>,
            )}
        
              </Form.Item> 
              <Form.Item>
                <Button type="primary" className="ant-btn-primary-register"onClick={()=>this.readData()}>
                  注册
                </Button><span className="return_login">已有账号 返回<a onClick={()=>this.props.history.push('/login')}>登录</a></span>
              </Form.Item> 
          </Form>   
        </div>
    )
  }
}

export default withRouter(Form.create({ name: 'register' })(Register));