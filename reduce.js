/**
 * reduce
 * 
 * @param {array} [array] 数组或者对象 
 * @param {function} [iteratee] 回调函数
 * @param {*} [accumulator] 累加值(初始值)
 * @param {boolean} [initAccum] 是否设置初始值
 * @returns {*}
 */

function reduce(array, iteratee, accumulator, initAccum) {
  let index = -1
  const length = array === null ? 0 : array.length

  if (initAccum && length) {
    accumulator = array[++index]
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array)
  }
  console.log(accumulator)
  return accumulator
}

reduce([1, 2], (sum, n) => sum + n, 0, 0) // => 3
