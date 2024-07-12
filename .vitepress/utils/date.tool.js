/**
 * 获取当前时刻的时间戳
 * @return {String} 时间戳
 */
export const getTimestamp = () => {
  return new Date().getTime();
};

/**
 * 将时间戳转换为用户自定义的时间格式
 * @param {Number} timestamp 时间戳
 * @param {String} rule 时间格式
 * @returns {String}
 */
export const timestampToFormatTime = (timestamp, rule = "yyyy-MM-dd HH:mm:ss") => {
  const D = new Date(timestamp);
  const timeObj = {};
  const rules = rule.match(/\w+/g);
  let ft = rule;

  timeObj["yyyy"] = D.getFullYear();
  timeObj["MM"] = D.getMonth() + 1;
  timeObj["dd"] = D.getDate();
  timeObj["HH"] = D.getHours();
  timeObj["mm"] = D.getMinutes();
  timeObj["ss"] = D.getSeconds();
  timeObj["ms"] = D.getMilliseconds();

  rules.map((f) => {
    let ff = f.length === 1 ? `${f}${f}` : f;
    ft = ft.replace(new RegExp(f, "g"), fillingZero(f, timeObj[ff]));
  });

  return ft;
};

/**
 * 根据时间字段名，自动判断是否需要填充零
 * @param {String} field 时间字段名
 * @param {String} value 预处理值
 * @returns {String|Number}
 */
export const fillingZero = (field, value) => {
  switch (field) {
    case "MM":
    case "dd":
    case "HH":
    case "mm":
    case "ss":
      return value < 10 ? `0${+value}` : value;
    case "M":
    case "d":
    case "H":
    case "m":
    case "s":
      return +value;
    default:
      return value;
  }
};
