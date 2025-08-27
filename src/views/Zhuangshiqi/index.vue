<!-- 装饰器 decorator -->
<script lang="ts" setup>
/*
参数说明：
○ target: 对于静态⽅法来说值是类的构造函数，对于实例⽅法来说值是类的原型对象。
○ propertyKey:⽅法的名称。
○ descriptor: ⽅法的描述对象，其中value属性是被装饰的⽅法。
*/
function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('target', target)
    console.log('propertyKey', propertyKey)
    console.log('descriptor', descriptor)
}
class Person {
    constructor(public name: string, public age: number) {}
    // Demo装饰实例⽅法
    @Demo speak() {
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`)
    }
    // Demo装饰静态⽅法
    @Demo static isAdult(age: number) {
        return age >= 18
    }
}
const p1 = new Person('张三', 18)
p1.speak()
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
