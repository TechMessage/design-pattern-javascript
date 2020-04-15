/**
    
    strategy 策略模式

    简单就是同样的业务需求，有多种实现方式，每一种都可以成为策略，根据条件灵活的切换某一种策略，典型就是消除大量的if-else分支

    对于前端典型的应用就是 表单的校验规则，每一种规则可以当做是一种校验策略

 */

// 传统的策略模式

// 策略类,不同的策略模式
var strategies = {
    isNonEmpty: function (value, errorMsg) {
        if (value === '' || value == undefined || value == null) {
            return errorMsg;
        }
    },
    isMobile: function (value, errorMsg) {
        if (!/^1[0-9]{10}$/.test(value)) {
            return errorMsg;
        }
    }
}


// 校验类，负责调用不同的策略，管理策略

var Validator = function () {
    this.rules = []; // 缓存所有的校验规则
}


Validator.prototype.add = function (dom, rule, errorMsg) {
    this.rules.push(function () {
        return strategies[rule].call(null, dom, errorMsg)
    })
}


Validator.prototype.start = function () {
    if (this.rules.length) {
        for (var i = 0, vacFuc; vacFuc = this.rules[i++];) {
            var msg = vacFuc();
            if (msg) {
                return msg;
            }
        }
    }
}



