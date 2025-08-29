/* Map 映射 */

const map = new Map()

/* 添加键值对set(key,value),键可以是任意类型 */
map.set('name', '林倾仙')
map.set('age', 18)
map.set('phone', '13800000000')
const obj = { user: 1 }
map.set(obj, '风华阁')
console.log(map) // 输出结果：Map(4) { 'name' => '林倾仙', 'age' => 18, 'phone' => '13800000000', { user: 1 } => '风华阁' }

/* 获取键对应的值get(key) */
// console.log(map.get('name')) // 输出结果：林倾仙
// console.log(map.get('age')) // 输出结果：18
// console.log(map.get('phone')) // 输出结果：13800000000
// console.log(map.get(obj)) // 输出结果：风华阁

/* 映射的大小size */
// console.log(map.size) // 4

/* 删除键值对delete(key) */
// console.log(map.delete('name')) // 输出结果：true
// console.log(map) // 输出结果：Map(3) { 'age' => 18, 'phone' => '13800000000', { user: 1 } => '风华阁' }

/* 清空映射clear() */
// map.clear()
// console.log(map) // 输出结果：Map(0) {}

/* 判断映射是否有某个键has(key) */
// console.log(map.has('age')) // 输出结果：true
// console.log(map.has('phone')) // 输出结果：true
// console.log(map.has(obj)) // 输出结果：true
// console.log(map.has('weizhi')) // 输出结果：false

/* 遍历映射 */
// 1. for...of循环
/* for (let [key, value] of map) {
    console.log(key, value)
} */

// 2. forEach循环
/* map.forEach((value, key) => {
    console.log(key, value)
}) */

// 3. map.keys()  获取一个包含所有键的迭代器
/* for (let key of map.keys()) {
    console.log(key)
} */

// 4. map.values()  获取一个包含所有值的迭代器
/* for (let value of map.values()) {
    console.log(value)
} */

// 5. map.entries()  获取一个包含所有键值对的迭代器
/* for (let [key, value] of map.entries()) {
    console.log(key, value)
} */

/**
 * 应用场景： 存储键值对、根据键快速查找值、缓存数据
 * 在频繁增删键值对的场景下，性能通常更好（相较于对象映射）
 * 键可以是任意类型，而对象的键只能是字符串或符号Symbol
 * */
