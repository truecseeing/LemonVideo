import React from 'react';
import axios from 'axios'
import '../../CSS/ranklist.css'
class RankList extends React.Component{
        constructor(props){
            super(props)
 }

getFilmComments = (vId) => {
    new Promise((reslove,reject) => {
        axios.get("http://118.31.58.177/LemonCinema/movie/comment",
        {
            params:{
                vId:vId
            }
        }).then(res => {
            reslove(res.data)
            if(res.data.code == 0){
                console.log("获取电影评论成功!")
                console.log(res.data)
                var comments = new Array()
                comments = res.data.data
            }
        }).catch(err => {
            reject(err.data)
        })
    })
}

 getAllFilmShowYears = () => {
    new Promise((reslove,reject) => {
        axios.get("http://118.31.58.177/LemonCinema/movie/year")
        .then(res => {
            reslove(res.data)
            if(res.data.code == 0){
                console.log("获取电影上映的所有年份成功!")
                console.log(res.data)
                var years = new Array()
                years = res.data.data
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
                var conrtrys = new Array()
                conrtrys = res.data.data//返回的是String数组
            }
        }).catch(err => {
            reject(err.data)
        })
    })
}

 //获取电影的所有标签
getAllFilmTags = () => {
    new Promise((reslove,reject) => {
        axios.get("http://118.31.58.177/LemonCinema/movie/tag")
        .then(res => {
            reslove(res.data)
            if(res.data.code == 0){
                console.log("获取电影的所有标签成功!")
                console.log(res.data)
                var tags = new Array()
                tags = res.data.data//返回string[]数组
            }
        })
    })
}

 getAllFilm = () => {
    new Promise((reslove,reject) => {
        axios.get("http://118.31.58.177/LemonCinema/movie")
        .then(res => {
            reslove(res.data)
            if(res.data.code == 0){
                console.log("获取全部视频成功!")
                console.log(res.data)
            }
        }).catch(err => {
            reject(err.data)
        })
    })
}

 getHotSearch = () =>{
    new Promise((resolve,reject) => {
        axios.get("http://118.31.58.177/LemonCinema/video/heat")
        .then(res => {
            resolve(res)
            if(res.status == 200){
                console.log("获取热搜模块视频成功")
                console.log(res.data)
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
 render(){
   
     return(
         <div className='rankList'>
             <ol>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             <a href><li></li></a>
             <br></br>
             </ol>
             <button onClick={() => {this.getAllFilm()}}>点</button>
         </div>

     )
 }
}
export default RankList