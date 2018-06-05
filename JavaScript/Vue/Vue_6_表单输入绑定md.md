## 基础用法

可以用 `v-model` 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。

> `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值。因为它会选择 Vue 实例数据来作为具体的值。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。

> 对于要求 [IME](https://en.wikipedia.org/wiki/Input_method) (如中文、日语、韩语等) (IME 意为“输入法”)的语言，你会发现 `v-model`不会在 ime 输入中得到更新。如果你也想实现更新，请使用 `input` 事件。



#### 文本

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```



#### 多行文本

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```



#### 复选框

单个勾选框，逻辑值：

```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

多个勾选框，绑定到同一个数组：

 ```html
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
 ```

```js
new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})
```



#### 单选按钮

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```

```js
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```



#### 选择列表

单选列表：

```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

>如果 `v-model` 表达初始的值不匹配任何的选项，`<select>` 元素就会以”未选中”的状态渲染。在 iOS 中，这会使用户无法选择第一个选项，因为这样的情况下，iOS 不会引发 change 事件。因此，像以上提供 disabled 选项是建议的做法。



多选列表 (绑定到一个数组)：

```html
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```



## 值绑定

对于单选按钮，勾选框及选择列表选项，`v-model` 绑定的 value 通常是静态字符串 (对于勾选框是逻辑值)：

```html
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">
<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">
<!-- 当选中时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时我们想绑定 value 到 Vue 实例的一个动态属性上，这时可以用 `v-bind` 实现，并且这个属性的值可以不是字符串。



#### 复选框

```html
<input
  type="checkbox"
  v-model="toggle"
  v-bind:true-value="a"
  v-bind:false-value="b"
>
```

```js
// 当选中时
vm.toggle === vm.a
// 当没有选中时
vm.toggle === vm.b
```



#### 单选按钮

```html
<input type="radio" v-model="pick" v-bind:value="a">
```

```js
// 当选中时
vm.pick === vm.a
```



#### 选择列表的选项

```html
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

```js
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```



## 修饰符

#### `.lazy`

在默认情况下，`v-model` 在 `input` 事件中同步输入框的值与数据 (除了 [上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip) IME 部分)，但你可以添加一个修饰符 `lazy` ，从而转变为在 `change` 事件中同步：

```html
<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model.lazy="msg" >
```



#### `.number`

如果想自动将用户的输入值转为 Number 类型 (如果原值的转换结果为 NaN 则返回原值)，可以添加一个修饰符 `number` 给 `v-model` 来处理输入值：

```html
<input v-model.number="age" type="number">
```



#### `.trim`

如果要自动过滤用户输入的首尾空格，可以添加 `trim` 修饰符到 `v-model` 上过滤输入：

```html
<input v-model.trim="msg">
```













