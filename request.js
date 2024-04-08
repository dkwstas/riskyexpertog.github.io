const REVERSE_PROXY = "https://reverse.banka.gr:2053/";
const SOURCE_URL = "https://trapeza.iep.edu.gr/public/";

function get(endpoint, params) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${REVERSE_PROXY}${SOURCE_URL}${endpoint}?${params}`, true);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(`${xhr.status}: ${xhr.statusText}`));
      }
    };
    xhr.onerror = function () {
      reject(new Error(`Could not connect to reverse proxy.`));
    }
    xhr.send();
  })
}

function post(endpoint, params) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${REVERSE_PROXY}${SOURCE_URL}${endpoint}`, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(`${xhr.status}: ${xhr.statusText}`));
      }
    };
    xhr.onerror = function () {
      reject(new Error(`Could not connect to reverse proxy.`));
    }
    xhr.send(params);
  })
}

export { get, post };