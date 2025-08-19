/// <reference types="vite/client" />
/**
 *  1. declare module '*.vue' 声明所有 .vue 后缀的文件模块
    2. 指定这些 Vue 组件默认导出的类型是 DefineComponent (Vue 提供的用于类型定义的组件类型)
    3. DefineComponent<{}, {}, any> 的三个泛型参数分别表示：
        第一个 {}: 组件 props 的类型（这里为空对象，表示无 props）
        第二个 {}: 组件内部状态的类型（这里为空对象）
        第三个 any: 组件方法的类型（这里为任意类型）
 */

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
