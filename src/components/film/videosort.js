import React from 'react';
import {Nav22DataSource} from '../../Home/data.source';
import '../../Home/less/antMotionStyle.less';
import Nav2 from '../../Home/Nav2.jsx'
import axios from 'axios'
import { Row, Col,Tag, Divider  } from 'antd';
import '../../CSS/videosort.css'
const style = { background: '#0092ff', padding: '8px 0' };

class VideoSort extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tagArr: [""],
            countryArr: [""],
            yearArr: [""],
            display2:true,
            allFilmArr:[""]
        }
        

    }
  
    //获取电影的所有标签
    getAllFilmTags = (props) => {
        new Promise((reslove,reject) => {
            axios.get("http://118.31.58.177/LemonCinema/movie/tag")
            .then(res => {
                reslove(res.data)
                if(res.data.code == 0){
                    console.log("获取电影的所有标签成功!")
                    console.log(res.data)
                    console.log(res.data.data)
                    this.setState({
                        tagArr :res.data.data
                    })
                
                    //console.log(this.props.tags)
                    //返回string[]数组
                }
            })
        })
    }

    //获取电影的所有国家
    getAllFilmContry = () =>{
        new Promise((reslove,reject)=>{
            axios.get("http://118.31.58.177/LemonCinema/movie/country")
            .then(res => {
                reslove(res.data)
                if(res.data.code == 0){
                    console.log("获取电影的所有国家成功!")
                    console.log(res.data)
                    this.setState({
                        countryArr :res.data.data
                    })
                }
            }).catch(err => {
                reject(err.data)
            })
        })
    }

    //获取电影产生年份
    getAllFilmShowYears = () => {
        new Promise((reslove,reject) => {
            axios.get("http://118.31.58.177/LemonCinema/movie/year")
            .then(res => {
                reslove(res.data)
                if(res.data.code == 0){
                    console.log("获取电影上映的所有年份成功!")
                    console.log(res.data)
                    this.setState({
                        yearArr :res.data.data
                    })
                }
            })
        })
    }

    getAllFilmRes = () => {
        this.getAllFilm().then((data) => {
            if(data.code == 0){
                console.log("异步改同步成功")
                console.log(data)
            }
        })
    }

    //获取所有电影
    getAllFilm = (props) => {
        new Promise((reslove,reject) => {
            axios.get("http://118.31.58.177/LemonCinema/movie")
            .then(res => {
                reslove(res.data)
                // if(res.data.code == 0){
                //     console.log("获取全部视频成功!")
                //     console.log(res.data)
                //     this.setState({
                //         allFilmArr:res.data.data
                //     })
                //     console.log(this.state.allFilmArr)
                //     console.log(this.state.allFilmArr[1])
                //     console.log(this.state.allFilmArr[1].imagePath)
                // }
            }).catch(err => {
                reject(err.data)
            })
        })
    }

    componentWillMount = (props) => {
        this.getAllFilm(props)
    }

    componentDidMount=(props)=>{
        this.getAllFilmTags(props)
        this.getAllFilmContry(props)
        this.getAllFilmShowYears(props)
        this.getAllFilmRes(props)
    }
    
    hiddenline=(...value)=>{
        if(value==''||value==null){
            this.setState({display2:false})
        }
    
    }

    render(){
        const display2 = {display:this.state.display2?'block':'none'}
        return(
            <div>
               <Nav2 dataSource={Nav22DataSource}/> 
               <Divider orientation="left">视频分类</Divider>
                    <div>
                    <Tag color="magenta">{this.state.tagArr[0]}</Tag>
                    <Tag color="red">{this.state.tagArr[1]}</Tag>
                    <Tag color="volcano">{this.state.tagArr[2]}</Tag>
                    <Tag color="orange">{this.state.tagArr[3]}</Tag>
                    <Tag color="gold">{this.state.tagArr[4]}</Tag>
                    <Tag color="lime">{this.state.tagArr[5]}</Tag>
                    <Tag color="green">{this.state.tagArr[6]}</Tag>
                    {/* <Tag color="cyan">{this.state.tagArr[7]}</Tag> */}
                    {/* <Tag color="blue"></Tag>
                    <Tag color="geekblue"></Tag>
                    <Tag color="purple"></Tag> */}
                    </div>

                    <Divider orientation="left">视频来源</Divider>
                    <div>
                    <Tag color="magenta">{this.state.countryArr[0]}</Tag>
                    <Tag color="red">{this.state.countryArr[1]}</Tag>
                    {/* <Tag color="volcano">{this.state.countryArr[2]}</Tag> */}
                    {/* <Tag color="orange">{this.state.countryArr[3]}</Tag>
                    <Tag color="gold">{this.state.countryArr[4]}</Tag>
                    <Tag color="lime">{this.state.countryArr[5]}</Tag> */}
                    {/* <Tag color="green"style={display2}>{this.state.countryArr[6]}</Tag>
                    <Tag color="cyan"style={display2}>{this.state.countryArr[7]}</Tag>
                    <Tag color="blue"></Tag>
                    <Tag color="geekblue"></Tag>
                    <Tag color="purple"></Tag> */}
                    </div>

                    <Divider orientation="left">视频年份</Divider>
                    <div>
                    <Tag color="magenta">{this.state.yearArr[0]}</Tag>
                    <Tag color="red">{this.state.yearArr[1]}</Tag>
                    <Tag color="volcano">{this.state.yearArr[2]}</Tag>
                    <Tag color="orange">{this.state.yearArr[3]}</Tag>
                    <Tag color="gold">{this.state.yearArr[4]}</Tag>
                    {/* <Tag color="lime">{this.state.yearArr[5]}</Tag>
                    <Tag color="green">{this.state.yearArr[6]}</Tag>
                    <Tag color="cyan">{this.state.yearArr[7]}</Tag>
                    <Tag color="blue"></Tag>
                    <Tag color="geekblue"></Tag>
                    <Tag color="purple"></Tag> */}
                    </div>

                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    全部视频
                    </Divider>
                    <Row gutter={[16, 24]}>
                    {/* <Col className="gutter-row" span={6}>
                        <div className="videodiv" ><a href=''><img src={this.state.allFilmArr[0].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[0].name}</span></a>
                            </div>
                    </Col> */}
                    {/* <Col className="gutter-row" span={6}>
                        <div className="videodiv" ><a href=''><img src={this.state.allFilmArr[1].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[1].name}</span></a>
                            </div>
                    </Col> */}
                    {/* <Col className="gutter-row" span={6}>
                        <div style={style}className="videodiv">
                        <a href=''><img src={this.state.allFilmArr[2].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[2].name}</span></a>
                            </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}className="videodiv">
                        <a href=''><img src={this.state.allFilmArr[3].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[3].name}</span></a>
                            </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}className="videodiv">
                        <a href=''><img src={this.state.allFilmArr[4].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[4].name}</span></a>
                            </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}className="videodiv">
                        <a href=''><img src={this.state.allFilmArr[5].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[5].name}</span></a>
                            </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}className="videodiv">
                        <a href=''><img src={this.state.allFilmArr[6].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[6].name}</span></a>
                            </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}className="videodiv">
                        <a href=''><img src={this.state.allFilmArr[7].imagePath}className="videoimg"></img></a>
                            <a><span className='videofont'>{this.state.allFilmArr[7].name}</span></a>
                            </div>
                    </Col> */}
                    </Row>
                
            </div>
                  
        )
    }

}
export default VideoSort