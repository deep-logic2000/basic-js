const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
 const res = {};

 for (let domain of domains) {
  let tempDomArr = domain.split(".");

  let tempDom = "";

  for (let i = tempDomArr.length - 1; i >= 0; i--) {
   tempDom += `.${tempDomArr[i]}`;
   res[tempDom] = (res[tempDom] || 0) + 1;
  }
 }

 return res;
}

module.exports = {
 getDNSStats,
};
