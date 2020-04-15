// 单例模式
/**
    单例模式核心就是在整个执行环境下，仅仅维护一个对象
 */


// 传统的Java类中实例，维护一个实例，对外暴露方法，通过方法获取到实例的访问

// var JavaSingleton = function () {

// }

// JavaSingleton.getInstance = function () {
//     if (!this.instance) {
//         this.instance = new JavaSingleton();
//     }
// }


// 1 这种方式不够透明，首先使用者使用的时候就要确定该对象就是一个单例的


// var JavaSingleton = (function () {

//     var instance = null; //闭包维护 单例对象

//     return function () {
//         if (!instance) {
//             instance = new Object()
//         }
//         return instance;
//     }
// }())


// 2. 既然 单例核心就是维护一个唯一的对象实例，那么结合闭包私有化变量的特性，任何的构造函数都可以通过闭包来生成一个包装函数，来作为单例类来使用


var getSingle = (function () {  // fn是构造函数，用来生成单例对象， 将管理单例和 生成对象分开， 单一职责范式
    var result; // result不仅是标记构造返回值，也是判断是否执行函数的标记
    return function (fn) {
        return result.length || (result = fn.apply(null))
    }
})();


var Apple = function () {
    return {
        name: 'apple',
        color: "red"
    }
}

var Banana = function () {
    return {
        name: 'banana'
    }
}

// var apple = getSingle(Apple);
// var apple2 = getSingle(Banana);

// getSingle没法复用，因为是维护一个结果,每次传入的构造函数，其实都会返回第一次调用的结果














