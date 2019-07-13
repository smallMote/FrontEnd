// function getData(code, callback) {
//     let data = { name: 'Anna'};
//     if(code === 200) {  
//         console.log('1.获取数据');
//         callback(data);
//     }     
// }

// function paseData(data, callback) {
//     console.log('2.解析数据');
//     callback(data);
// }

// function packageData(data, callback) {
//     console.log('3.包装数据')
//     callback(data);
// }

// function useData(data, callback) {
//     console.log('4.分支使用数据');
//     callback(data);
    
// }
// getData(200, function(data) {
//     //其他操作
//     paseData(data, function(data) {
//         //其他操作
//         packageData(data, function(data) {
//             //其他操作
//             useData(data, function(data) {
//                 //....
//                 console.log(data, '5.1使用数据完成');
//             })
//         })
//     })
// })

function getData(resolve, reject) {
    let code = 200;
    let data = {name: 'Anna'};
    if(code === 200) {  //成功
        console.log('1.获取数据');
        resolve(data);
    } else {
        reject('未获得任何数据');
    }
}

function parseData(data) {
    console.log('2.解析数据');
    return data;
}

function packageData(data) {
    console.log('3.包装数据');
    return data;
}

function useData(data) {
    console.log(data, '4.使用数据');
}

// new Promise(getData)
// .then(res => parseData(res))
// .then(res => packageData(res))
// .then(res => useData(res))
// .catch(err => console.log(err));