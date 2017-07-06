// const tip = require('../common/components/base/pop/tip');
// const hostUrl = require('./host.js')
// const router = require('../router')
// const address = hostUrl.host

let defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

module.exports = function(type, url, params, diff) {
  let exhost = address;

  let urls = docking ? address + '/api/' + url : url;

  let ajaxOptions = {
    url: urls,
    type: type,
    data: type === 'get' ? params : JSON.stringify(params),
    contentType: 'application/json',
    dataType: 'json',
  }

  let acceptToken = window.localStorage.getItem('sassToken');
  if (acceptToken) {
    ajaxOptions.headers = Object.assign(defaultHeaders, { token: acceptToken });
  }

  return new Promise((resolve, reject) => {
    let acceptToken = window.localStorage.getItem('sassToken');
    if (!acceptToken) {
      //todo
      reject();
      return false;
    }
    $.ajax(Object.assign(ajaxOptions, {
      success: (res) => {
        if (res.code === 0) {
          resolve(res.data);
        } else if (res.code === 2) {
          //todo
        } else {
          reject(res);
        }
      },
      complete: () => {
        //todo
      },
      error: (err) => {
        tip('网络异常，请检查网络连接或重试');
      }
    }))
  });
}
