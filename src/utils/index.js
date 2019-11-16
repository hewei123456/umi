import {cloneObject} from './cloneObject';
import {cookie} from './cookie';

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

export const formatTime = timestamp => {
  var date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

export const subStrByDigits = (str, digits) => {
  var strNew = str;
  if (strNew.length > digits) {
    strNew = strNew.substring(0, digits) + '...';
  }
  return strNew;
};

export const hasChinese = str => {
  var reg = new RegExp('[\u4E00-\u9FFF]+', 'g');

  return reg.test(str);
};

export const splitArr = (arr, len) => {
  let a_len = arr.length, result = [];
  for (var i = 0; i < a_len; i += len)
    result.push(arr.slice(i, i + len));

  return result.length > 0 ? result : [[]];
};

export const isInArray = (arr, value) => {
  if (arr.indexOf && typeof (arr.indexOf) == 'function') {
    var index = arr.indexOf(value);
    if (index >= 0)
      return true;
  }
  return false;
};

export const remove = (arr, val) => {
  var index = arr.indexOf(val);
  if (index > -1)
    arr.splice(index, 1);
};

export const getUrlParams = (name, url) => {
  if (!url) url = window.location.href;
  var params = {};
  url = decodeURI(url);
  var idx = url.indexOf("?");
  if (idx > 0) {
    var queryStr = url.substring(idx + 1);
    var args = queryStr.split("&");
    for (var i = 0, a, nv; a === args[i]; i++) {
      nv = args[i] = a.split("=");
      params[nv[0]] = nv.length > 1 ? nv[1] : true;
    }
  }
  return params[name] ? params[name] : '';
};

export {cloneObject, cookie};
