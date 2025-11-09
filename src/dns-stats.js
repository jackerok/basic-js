const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(domains)) return {};

  const stats = {};

  for (const domain of domains) {
    const parts = domain.split(".").reverse();

    let path = "";
    for (let i = 0; i < parts.length; i++) {
      path = path ? `${path}.${parts[i]}` : `.${parts[i]}`;
      stats[path] = (stats[path] || 0) + 1;
    }
  }

  return Object.keys(stats)
    .sort()
    .reduce((obj, key) => {
      obj[key] = stats[key];
      return obj;
    }, {});
}

module.exports = {
  getDNSStats,
};
