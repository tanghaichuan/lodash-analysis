/**
 * map
 * 
 * @param {Array} array
 * @param {Function} iteratee
 * @returns {Array}
 */

// function square(n) {
//   return n * n
// }

// map([4, 8], square) // [16,64]

function map(array, iteratee) {
  let index = -1
  const length = array === null ? 0 : array.length // 避免出现length undefined
  const res = new Array(length) // new关键字调用array构造器在内存中开辟出一块地址，子集是[]，arr.constructor = Array.prototype.constructor;无论是数组与否都能调用到Array原型上定义的方法
  while (++index < length) {
    res[index] = iteratee(array[index], index, array) // (item, index, array)
  }
  return res
}