'use strict';

let p1 = () => {
    return new Promise((resolve, reject) => {
        console.log('步骤1');
        resolve('返回给步骤2');
    })
}

p1()
.then((data) => {
    return new Promise((resolve, reject) => {
        console.log('步骤2');
        console.log(data);
        resolve('返回给步骤3');
    });
})
.then((data) => {
    console.log('步骤3');
    console.log(data);
})
.catch(err => console.log(err));    //catch捕获的是每一个resolve中的异常