### 安装ES6环境
ES6是需要依赖与node上运行的，虽然现在很多浏览器也支持了不少ES6的语法，但是为了兼容我们可以将ES6转换成es5然后再向浏览器输出。
###### 使用Babel转换ES6
首先我们再根目录初始化一下:
1.首先在根目录创建src和dilst文件夹，src下创建一个index.js（用来写ES6）
```
-src //用于编码
    --index.js
-dilst   //用于输出
```
2.建立package.json文件
`node -init -y `
3.全局安装Babel
`npm install -g bable-cli`
4.先别急现在换不能转换，还需要本地安装babel-preset-es2015 和 babel-cli
`npm install --save-dev babel-preset-es2015 bable-cli`
5.安装完成后我们可以看到pacjage.json多了一些配置
```
"devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1"
  }
```
6.在根目录建立.bablelrc文件（新建和修改这个文件会有点点小坑，需要朋友们自己去解决了，都是计算机权限问题，好解决的）
[mac创建.bablelrc传送门](https://blog.csdn.net/singsingasong/article/details/79886566)
[win创建.bablelrc传送门](https://blog.csdn.net/Mean_/article/details/77003919)
具体配置如下
```
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```
7.现在我们就可以愉快的转换ES6了，在控制台输出执行命令（注意路径，应在项目到更目录下，也就是.bablelrc和package.json同级目录下）
```
babel src/index.js -o dist/index.js
//babel用来转换对应的js文件
//-o这是用来输出到对应到文件
```
8.我们没必要每次都去执行这么长都命令，在package.json中配置一下
```
//修改前
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
//修改后
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src/index.js -o dist/index.js",
}
```
这样我们在控制台直接npm run build就可以直接转换了

### let声明变量
### 变量都解构赋值
### 扩展运算符和rest运算符
### 字符串模版
### ES6数字操作
### ES6中新增的数组知识
### ES6中的箭头函数和扩展
### ES6中的函数和数组补漏
### ES6中对象
### Symbol在对象中的作用
###### 保护对象
假如我们现在有一个对象是Anna（此对象非彼对象，嘿嘿），我们第一次见面人家只给了你名字，你就好奇她都年龄，但是女孩子一般都是比较害羞都，怎么会给你说她都芳龄，于是就对自都年龄进行了保护，不让你知道。
```
let obj = {
    name: 'Anna',
}
obj[age] = 58;  //注意这里只能用[]的形式放属性，用'.'是不能起到保护作用的
console.log(obj);   //{name: "Anna", age: 58}
for(let index in obj) {
    console.log(obj[index]);// Anna
}
```
###### 构建对象的key
```
let key = Symbol();
let obj = {
    [key]: 'Anna',
}
console.log(obj);   //{Symbol(): "Anna"}
key = 'age';
obj[key] = 18;  //这里也可以用obj.key = 18
console.log(obj);   //{age: 18, Symbol(): "Anna"}
```
### Set和WeakSet数据结构
### map数据结构
### 用Proxy进行预处理
### Promise对象的使用
###### 解决地狱回调
因为js中有一只函数机制叫回调机制，就是将一个函数作为一个参数传入，当主题函数执行之后再执行回调，这样感觉的确很舒服也比较使用，不过前提是只有一次或者两次的话感觉还是OK的，但是如果多了的话就会产生严重的函数潜嵌套问题
*我们先看一下，下方的代码*
```
function getData(code, callback) {
    let data = { name: 'Anna'};
    if(code === 200) {  
        console.log('1.获取数据');
        callback(data);
    }     
}

function paseData(data, callback) {
    console.log('2.解析数据');
    callback(data);
}

function packageData(data, callback) {
    console.log('3.包装数据')
    callback(data);
}

function useData(data, callback) {
    console.log('4.分支使用数据');
    callback(data);
    
}
getData(200, function(data) {
    //其他操作
    paseData(data, function(data) {
        //其他操作
        packageData(data, function(data) {
            //其他操作
            useData(data, function(data) {
                //....
                console.log(data, '5.1使用数据完成');
            })
        })
    })
})
```
是不是有种越看越蒙的感觉，就像才毕业叫你去看淘宝源码一样，第一次感觉还可以，越往下看你越蒙。所以ES6中就出现了Promise这个好东西。
###### Promise是怎么解决低于回调的
```
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

new Promise(getData)
.then(res => parseData(res))
.then(res => packageData(res))
.then(res => useData(res))
.catch(err => console.log(err));
```
###### 么优雅的使用Promise
我们可以将Promise存放在一个函数中，我们将Promise返回，如下
```

```
### class类的使用
###### 如果你会一门后端语言这玩意儿一看就会
创建一个类只需要关键字class就足够了，一个类里面应该有什么呢？包括三个，一个是属性，一个是方法，还有一个构造函数，如果不写constructor构造函数，ES6将会隐式提供一个没有参数的构造函数。
###### 创建类的属性
```
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let people = new People('Anna', 18);
console.log(people);    //People {name: "Anna", age: 18}
```
###### 创建类的方法和使用
```
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}

let people = new People('Anna', 18);
console.log(people.getName());  //Anana
people.setName('Larry');
console.log(people.getName());  //Larry
```
###### 继承（这个非常重要）
首先作为一个类，自然要考虑到他的继承，提高复用率，扩展性。
```
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    skill(sth) {
        console.log(`我的名字是${this.name}，我今年${this.age}岁，我会${sth}。`)
    }
}

class Man extends People {
    constructor(...augments) {
        //super();    //如果只是继承父类的方法
        super(...augments); //继承父类的全部属性和方法
        this.sex = '男';
    }

    play_game(g_name) {
        console.log(`我是个${this.sex}孩子，我喜欢玩${g_name}。`);
    }
}

let man = new Man('Larry', 18);
console.log(man);
man.skill('弹吉他');    //我的名字是Larry，我今年18岁，我会弹吉他。
man.play_game('LOL');   //我是个男孩子，我喜欢玩LOL。
```
### 模块化操作
模块化操作也已经是如今前端开发的一种很广泛的现象了，无论是现在的三大前端框架，还是小众的框架几乎都不会不用这种开发模式的。构建模块只需要理解导出、引入即可，剩下的就是自己天马行空的想象力了。
###### export导出模块
*单个导出*
`export let num = 1`
*多个导出*
```
let arr = [];
let obj = {};
export {arr, obj}
```
*变量名保护*
为什么要保护变量名，别急往下看，现在只是导出，还要看如何使用模块
```
let arr = [];
let obj = {};
export {arr as a, obj as o}
```
*默认导出*
```
let arr = [];
let obj = {};
export {arr as a, obj as o}
export let num = 1;
export default num  //默认导出
```
###### import导入
使用import导入使用后并不能马上运行，开篇便说了ES6是依赖于node的，所以这里需要用bable来转换一下，然后使用node来运行。
*export导出时用{导出时的名称}来导入*
```
import {Test} from '../components/com-test.js'
console.log(Test);  
```
*用export default导出时可以随意命名*
```
import test from '../components/com-test.js'
console.log(test);  
```
