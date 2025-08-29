/* Set集合 */

let set = new Set()
/* 添加值，会自动去重 add() */
/* set.add(1)
set.add(2)
set.add(1)
console.log(set) */

/* 集合的大小 size */
// console.log(set.size) // 2

/* 判断集合中是否有某个值 has(),返回值是布尔值boolean */
/* console.log(set.has(3))
console.log(set.has(2)) */

/* 删除值 delete()、清空集合 clear() */
// set.delete(1) // 删除成功返回true，失败返回false
// set.clear() // 清空集合

/* 遍历set集合的方法 */

// 1. for...of循环
/* for (let value of set) {
    console.log(value) // 输出结果：1  2
} */

// 2. forEach循环
// set.forEach((value) => console.log(value)) // 输出结果：1  2

// 3. 使用set.keys()或set.values()方法获取迭代器对象，结果是一样的
// console.log(set.keys()) // [Set Iterator] { 1, 2 } 迭代器对象
// for (val of set.values()) {
//     console.log(val) // 输出结果：1  2
// }

// 4. 使用set.entries()方法获取包含 [value, value]对的迭代器对象，结果是键值对的形式
// console.log(set.entries()) // [Set Entries] { [ 1, 1 ], [ 2, 2 ] }
// for (const [key, value] of set.entries()) {
//     console.log(key, value) // 输出结果：1 1  2 2
// }

/* 过滤set集合中的元素（并集） */
// set只有forEach方法，但是可以赋值给数组来使用数组的其它方法
// let filterArr = [...set].filter((value) => value > 1)
// console.log(filterArr) // [ 2 ]
// console.log(new Set(filterArr)) // 输出结果：Set(1) { 2 }

/* 数组去重、合并 */
// const arr = [1, 2, 2, 3, 4]
// console.log('原数组：', arr)
// const set1 = new Set(arr)
// console.log('去重后的set集合：', set1) // 输出结果：Set(4) { 1, 2, 3, 4 }  说明创建set集合时可以传入数组生成一个去重后的set集合
// const newArr = [...set1]
// console.log('去重后的数组：', newArr)

/* 打印集合的值也可以通过扩展运算符 */
// console.log(...set)

/**
 * 应用场景： 数组去重、集合运算、存储唯一值
 */
