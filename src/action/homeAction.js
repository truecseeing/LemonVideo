import axios from 'axios'

//热搜模块 主页热门视频
export const getHotSearch = () =>{
    new Promise((resolve,reject) => {
        axios.get("http://118.31.58.177:3000/mock/11/LemonCinema/video/heat")
        .then(res => {
            resolve(res.data)
            if(res.data.code == 0){
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