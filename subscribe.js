//  订阅发布模式（时间模型） - 1对多关系


var myEvent = {
    list: [],
    on: function (event, callback) {
        if (!this.list[event]) {
            this.list[event] = [];
        }
        this.list[event].push(callback);
    },

    trigger: function (event, params) {
        var fns = this.list[event];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, cb; cb = fns[i++];) {
            // cb.apply(this, params);
            cb && cb(params); //执行回调
        }
    }
}



