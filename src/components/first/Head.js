import React, { Component } from 'react'
import {Menu} from "antd";
import { BrowserRouter as Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import { Modal, Button } from 'antd';

import *as filmActions from "../../actions/filmActions"

class Header extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            //默认不改变
            "con": ""
        }
        
    }

    updateState=(e)=>{
        this.setState({"con":e.target.value})
    }
    error(title) {
        Modal.error({
            title: title,
            //content: 'some messages...some messages...',
            onOk() {}
        });
    }
    search() {
        
        this.props.films.searchKuang(this.refs.search.value, (result) => {
            if(result.status == 200) {
                this.props.history.push(`films/${result.fId}`)
            }else {
                this.error("无该排片信息......");
                this.setState({
                    //清空
                    "con": ""
                })
            }
          
        })
    }

    render() {
       
        return (
            <div className="header">
                <Menu  mode="horizontal">
                    <Menu.Item key="title">
                        <span className="title"></span>
                     </Menu.Item>    
                    <Menu.Item key="chat" className="daohang">
                        <Link to="/contact">联系客服</Link>
                    </Menu.Item>
                    <Menu.Item key="login" ref="header1" className="daohang" >
                        <a 
                            href="javascript:;" 
                            onClick={() => {
                                if(!this.props.exit) {
                                    this.props.IsLogin("1");
                                }
                                else {
                                    //退出函数
                                    this.props.exitUser((status) => {
                                        if(status == 200) this.props.setExit(false)
                                    })
                                };
                            }}
                        >
                            <div style={{"display": "inline-block","position": "relative", "top": "4px"}}>
                                {/*<span style={{"display": this.props.login.loginED ? "block" : "none"}} className="iconfont user">&#xe625;</span>*/}
                                <img style={{"display": this.props.login.loginED ? "block" : "none"}} src={require("../../images/index/lemonh.jpg")} className="iconfont user"/>
                            </div>
                            &nbsp;&nbsp;
                            {
                                this.props.login.loginED 
                                    ?
                                this.props.login.username
                                    :
                                "登录"
                            }
                        </a>
                    </Menu.Item>
                    <Menu.Item key="movie" className="daohang">
                        <Link to="/films">影片</Link>
                    </Menu.Item>
                    <Menu.Item key="app" className="daohang">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    
                </Menu>  
                <img className="header_img" src={require("../../images/index/lemon.jpg")} alt=""/>   
                <div className="search">
                    <input ref="search" type="text" value={this.state.con} onChange={(e) => {this.updateState(e)}}/>
                    <span onClick={() => {this.search()}}>搜索</span>
                </div>
            </div>
        )
    }
}

export default withRouter(
    connect(
    
    null,
    (dispatch) => ({
        "films": bindActionCreators(filmActions, dispatch)
    })
)(Header),);
