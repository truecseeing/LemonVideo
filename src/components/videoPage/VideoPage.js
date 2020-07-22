import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Nav2 from '../../Home/Nav2.jsx'
import Player from 'griffith'
import {Nav22DataSource} from '../../Home/data.source';
import '../../Home/less/antMotionStyle.less';
import axios from "axios";
import { Rate } from 'antd';
import '../../CSS/videoPage.css'
import Commention from '../comment/Commention.js';
class VideoPage extends React.Component{
    constructor(props){
        super(props)
    }
    // getRateValue(){
    //     let value = document.getElementsByClassName('rateVideo')[0].value;
    // }
    // postRateStar=()=>{
    //     axios.post('http://118.31.58.177//lemonCinema/movie/score')
    // }
    render(){

    return(
        <React.Fragment>
            <Nav2 dataSource={Nav22DataSource}/>  
            <div className='player' >
                <video src="https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4"controls='controls'width='1280px' height="720px"></video>
                {/* <h3>电影评分：</h3>
                <div className='flvrate'>
                 <Rate className="rateVideo"></Rate>
                </div>
                <Commention/> */}
                 <div className='flvrate'>
                <h3>视频评分：</h3>
                <div className='stars'>
                 <Rate className="rateVideo"></Rate>
                </div>
                </div>
                <div className='com'>
                <Commention />
                </div>
            </div>
            
               
        </React.Fragment>
    ) 
    
    
}
}
export default VideoPage