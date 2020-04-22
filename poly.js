/**

    多态，多态的背后的意义其实是 做什么  和 谁去做 分离开来   谁去做这个体现的就是类型的问题，多态就是要解决类型之间的耦合问题，

    比如在静态原因中，参数都是有类型的，在传参的额时候就特别明显，只有特定的类型可以接受。

    而js本身就是动态的，函数传参，之后再执行的时候在知道类型。

    所以函数的传参其实就是一种多态的体现，那么为了解决这个问题，传统的静态语言比如 java，它有一种向上转型的机制，就是不同的类型继续向上抽象为一种类型；

    而对于js这种动态语言，鸭子类型的特性，根本不关心你的参数是什么类型，就直接按照预定的方法调用


 */


var dog = {
    yell() {
        console.log('dog is yell')
    }
}

var cat = {
    yell() {
        console.log('cat is yell')
    }
}

function animalYell(animal) { // 这里参数接收动物，但是不同的动物就构成了类型的多态，你传入不同的类型，就会调用对应类型的方法， 这就构成了多态解决的两个问题 做什么？ 和 谁去做 ？
    animal.yell && animal.yell();
}




