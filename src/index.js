
exports.min = function min(array = 0) {
  return array.length ? Math.min(...array) : 0;
}

exports.max = function max(array = 0) {
  return array.length ? Math.max(...array) : 0;
}

exports.avg = function avg(array = 0) {
  return array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;
}
