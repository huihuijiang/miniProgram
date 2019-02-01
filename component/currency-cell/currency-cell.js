//logs.js

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,

        },
        title: {
            type: String,

        },

    },

    /**
     * 组件的初始数据
     */
    data: {
        x0: 0,
        y0: 0,

    },

    /**
     * 组件的方法列表
     */
    methods: {

        start(event) {
            let arr = this.data.list;
            let left, style;
            for (var i in arr) {
                if (i == event.currentTarget.id) {
                    if (arr[i].left != undefined) arr[i].left0 = arr[i].left;
                } else {
                    left = 0;
                    style = 'transform: translate(' + left + 'px, 0);transition:all 0.3s linear 0.01s'
                    arr[i].left = left;
                    arr[i].style = style;
                }
            }
            this.setData({
                list: arr,
                x0: event.touches[0].clientX,
                y0: event.touches[0].clientY,
            })
        },
        move(event) {
            const [x1, y1, x0, y0] = [
                event.changedTouches[0].clientX,
                event.changedTouches[0].clientY,
                this.data.x0,
                this.data.y0
            ];
            let index, left;
            var arr = this.data.list;
            for (var i in arr) {
                if (i == event.currentTarget.id) {
                    index = i;
                    left = arr[i].left0 + (x1 - x0);
                }
            }
            if (Math.abs(x1 - x0) > Math.abs(y1 - y0)) { //zuoyou
                if (arr[index].left0 == 0) {
                    if (x1 - x0 > 0) left = 0;
                }
                var style = 'transform: translate(' + left + 'px, 0);'
                arr[index].left = left;
                arr[index].style = style;
                this.setData({
                    list: arr,
                })
            }
        },
        end(event) {
            const [x1, y1, x0, y0] = [
                event.changedTouches[0].clientX,
                event.changedTouches[0].clientY,
                this.data.x0,
                this.data.y0];
            let arr = this.data.list;
            let index, left, style;
            for (var i in arr) {
                if (i == event.currentTarget.id) index = i;
            }
            if (Math.abs(x1 - x0) > Math.abs(y1 - y0)) {//左右滑动

                if (x1 - x0 <= -50) { //左滑超过50
                    left = -100;
                } else if (x1 - x0 >= 50) { //右滑超过50
                    left = 0;
                } else {
                    left = arr[index].left0;
                }

                arr[index].left = left;
                arr[index].style = 'transform: translate(' + left + 'px, 0);transition:all 0.3s linear 0.01s';
                this.setData({
                    list: arr,
                })
            }

        },
        endCallback: function () {

        },
        callback: function (id, self) {
            var arr = self.data.list;
            for (var i in arr) {
                if (i == id) {
                    var index = i;
                }
            }
            var left = 0;
            var style = 'transform: translate(' + left + 'px, 0);transition:all 0.3s linear 0.01s'
            arr[index].left = left;
            arr[index].style = style;
            self.setData({
                list: arr,
            })
        },
        click: function (e) {
            var id = e.currentTarget.id
            var myEventDetail = {
                id: id,
                fun: this.callback
            } // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('myevent', myEventDetail, myEventOption)


        }
    }
})
