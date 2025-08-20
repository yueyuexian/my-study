// 定义一个接口
interface treeNode {
    id: number
    pid: number
    [key: string]: any
}

// 1. 树结构转换：采用递归方式
const transferTree = (id: number, list: treeNode[]) => {
    const tree: treeNode[] = []
    list.forEach((item) => {
        if (item.pid === id) {
            // 找到子节点
            tree.push(item) // 找到子节点，添加到tree中
            item.children = transferTree(item.id, list) // 递归查找子节点的子树
        }
    })
    // 如果没有子节点，则children为null
    return tree.length > 0 ? tree : null
}

// 2. 树结构转换：采用循环方式
const transferTree2 = (list: treeNode[]) => {
    list.forEach((item) => {
        // 第一次遍历所有项
        const children: treeNode[] = []
        list.forEach((i) => {
            // 第二次遍历列表，找到当前项的所有子节点
            if (i.pid === item.id) {
                children.push(i)
            }
            item.children = children.length > 0 ? children : null
        })
    })
    // 过滤列表返回一级节点（此时列表已经转换成了具有树形结构的列表）
    return list.filter((item) => item.pid === 0)
}

// 按需导出函数和接口类型
export { transferTree, transferTree2, type treeNode }
