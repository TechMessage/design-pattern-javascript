//  代理模式

//  代理模式的意义就是 拦截目标 方法,

// 虚拟代理，其实就是在真正的代理之前，做一些其他的事情，从而扩展了代理方法，而且对外暴露的都是通用的接口，两者可以相互替换

// 以图片懒加载为例， 有些图片特别的大，可能需要用一个loading的图进行占位，当图片加载玩后在



// 缓存代理，虚拟代理

// 虚拟代理，在程序开始时给外提供一个虚拟接口，这对用户是无感的，用户可以正常的调用，这些虚拟的代理接口会将操作进行缓存，当触发某个动作的时候才会去加载执行缓存中的操作

// 例子, 自定义的console接口，用户输出日志信息，只有当用户浏览器调试的时候才在控制台输出，正常用户可以使用

var myConsole = (function () {
    var cache = []; //缓存操作

    var handler = function (e) {
        if (e.keyCode == 113) {
            //加载script
            var script = document.createElement('script');
            script.onload = function () {
                for (var i = 0, fn; fn = cache[i++];) {
                    fn();
                }
            }
            script.src = './console.js'; //加载真正的console.js
            document.body.appendChild(script);
            document.body.removeEventListener('keyup', handler); //执行完毕就是结束
        }
    }

    document.body.addEventListener('keyup', handler);

    return function () {
        var args = arguments;
        cache.push(function () {
            return console.log.apply(null, args)
        });
    }
})();


// 虚拟代理 惰性,当真正打开控制台的时候才触发 加载myConsole.js



// 缓存代理， 对于一些比较开销大的计算操作进行结果的缓存，下次访问直接返回缓存的值， 比如阶乘
var mult = function () {
    var a = 1;
    for (var i = 0; i < arguments.length; i++) {
        a = a * arguments[i];
    }
    return a;
}

// 加入缓存代理, 就是提供了缓存数组
var proxyMult = (function () {
    var cache = [];
    return function () {
        var args = [].join.apply(arguments, ',');
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = mult.apply(this, arguments);
    }
})();

proxyMult(3,1,2);








