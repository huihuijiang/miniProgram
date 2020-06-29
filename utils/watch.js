

// /**
// 	  * 设置监听器
// 	  */
// function setWatcher(obj) { // 接收index.js传过来的data对象和watch对象和页面对象
//   Object.keys(obj).forEach(key => { // 将watch对象内的key遍历
//     observe(obj, key); // 监听data内的v属性，传入watch内对应函数以调用
//   })
// }
// /**
//  * 监听属性 并执行监听函数
//  */
// function observe(obj, key) {
//   var val = obj[key]; // 给该属性设默认值
//   Object.defineProperty(obj, key, {
//     configurable: true,
//     enumerable: true,
//     set: function (value) {
//       val = value;
//       console.log(obj + '的属性' + key + '被修改了,' + '值为' + val)
//       // watchFun(val, that); // 赋值(set)时，调用对应函数
//     },
//     get: function () {
//       console.log(obj+'的属性'+key+'被读取了,'+'值为'+val)
//       return val;
//     }
//   })
// }
// const myObj = {
//   age: 18,
//   name: 'Alice'
// }
// console.log(myObj.age)
// setWatcher(myObj)
// console.log(myObj.age)
// console.log(myObj.name)
// myObj.age = 20
// console.log(myObj.age)
// // console.log(myObj,setWatcher)