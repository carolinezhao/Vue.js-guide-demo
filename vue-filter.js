// Vue.js 允许自定义过滤器，可被用于一些常见的文本格式化。
// 过滤器可以用在两个地方：双花括号插值和 v-bind 表达式。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示。

// 可以在一个组件的选项中定义本地的过滤器：
// filters: {
//   capitalize: function (value) {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
//   }
// }

// 可以全局定义过滤器：
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString() // 将逻辑值转换为字符串
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('formatId', function (value) {
  if (!value) return ''
  value = value.toString().toLowerCase()
  return value
})

// 过滤器可以串联：
// {{ message | filterA | filterB }}
// 在这个例子中，filterA 被定义为接收单个参数的过滤器函数，表达式 message 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，将 filterA 的结果传递到 filterB 中。

// 过滤器是 JavaScript 函数，因此可以接收参数：
// {{ message | filterA('arg1', arg2) }}
// 这里，filterA 被定义为接收三个参数的过滤器函数。其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数。

var vm = new Vue({
  el: '#app',
  data: {
    msg: true,
    rawId: 'Happy-Spring'
  }
})