Promise.myAll = function (data) {
    return new Promise((resolve, reject) => {
        if (data === null || !data[Symbol.iterator]) {
            // 对象是没有Symbol.iterator属性的，所以不能使用for...of循环
            reject('错误，无法迭代')
            return
        }

        let count = 0 // 已完成的 Promise 数量
        let result = [] // 用于存储每个 Promise 的结果
        const promises = Array.from(data) // 将类数组对象或可迭代对象（iterable）转换为真正的数组
        if (promises.length === 0) {
            return resolve(result) // 空迭代对象直接 resolve
        }

        for (let i = 0; i < promises.length; i++) {
            /**
             * Promise.resolve(x) → 永远返回一个 Promise，这个 Promise 代表的是“传入的值已经被 resolved”。
                如果传入 Promise → 原样返回这个 Promise对象，等待它的状态改变；
                如果传入普通值 → 包一层，返回新的 resolved Promise；
             */
            Promise.resolve(promises[i])
                .then((res) => {
                    // console.log(i)
                    // console.log(res)
                    count++ // 已完成的 Promise 数量
                    result[i] = res
                    if (count === promises.length) {
                        resolve(result)
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        }
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1成功')
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2成功')
    }, 3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3成功')
    }, 2000)
})
Promise.myAll([p1, p3, p2]).then((res) => {
    console.log('我自己的Promise.myAll:')
    console.log(res)
})
Promise.all([p1, p3, p2]).then((res) => {
    console.log('原来的Promise.all')
    console.log(res)
})
