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
// console.log(man);
// man.skill('弹吉他');    //我的名字是Larry，我今年18岁，我会弹吉他。
// man.play_game('LOL');   //我是个男孩子，我喜欢玩LOL。

