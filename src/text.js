let p={data:{tall:30,weight:50},data:{tall:40,weight:45},data:{tall:65,weight:70}};
    let pArr= Object.keys(p).map((key,i)=>({
        i,
        key,
        value:p[key]    
    }));
     console.log(pArr[0])
     console.log(pArr[1])
     console.log(pArr[2])
