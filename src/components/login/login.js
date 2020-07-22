import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
// import '../../CSS/login.css'
import '../../Home/less/login.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import axios from "axios";
import qs from "qs"

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  handleResetClick = e => {
    this.props.form.resetFields();
  };
  userLogin = (phone, password) => {
    let formData = new FormData()
    formData.append('phone', Number(phone));
    formData.append('password', password);
    new Promise((reslove, reject) => {
      axios.get("http://118.31.58.177/LemonCinema/user", {
        params: {
          number: phone,
          password: password,
        }
      })
        .then(res => {
          reslove(res)
          console.log(res.data)
          if (res.status == 200) {
            console.log("登录成功!")
            console.log(res.data.code)
            console.log(res.data.data.uId)
            alert("登陆成功")
          } else {
            alert("登录失败")
          }
        }).catch(err => {
          reject(err)
        })
    })
  }
  readDataUser = () => {
    var self = this;
    var dataUser = this.props.form.getFieldsValue();
    this.userLogin(dataUser.phone, dataUser.password);
    // setTimeout()=>{

    // }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="user-login-popover">
        <div className="user-login-popover__cover"></div>
        <div className="user-login-popover__content">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}

          >
            <Form.Item
              name="phone"
            >{getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: '请输入你的手机号!',
                },
              ]
            })

              (<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号" />)}
            </Form.Item>
            <Form.Item
              name="password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入你的密码!',
                  },
                ]
              })
                (<Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />)}

            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                忘记密码
                </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.readDataUser}>
                登录
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="" onClick={() => this.props.history.push("/register")}>注册</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Form.create({ name: 'login' })(Login));
