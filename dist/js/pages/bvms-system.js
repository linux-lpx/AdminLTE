(function (window) {
  if (window.route === undefined) {
    window.route = {}
  }
  window.route.logout = function () {
    sessionStorage.clear();
    window.location.href = '../system/bvms-login.html';
  };
  window.route.goToPage = function (path, parentName) {
    sessionStorage.setItem('path', path);
    sessionStorage.setItem('parentName', parentName);
    window.location.href = path;
  };
})(window);

(function (window) {
  if (window.util === undefined) {
    window.util = {}
  }
  window.util.showCurrency = function (currency) {
    let currencyDesc;
    switch (currency) {
      case 1:
        currencyDesc = '人民币';
        break;
      case 2:
        currencyDesc = '美元';
        break;
      case 3:
        currencyDesc = '欧元';
        break;
      case 4:
        currencyDesc = '英镑';
        break;
      default:
        currencyDesc = '人民币';
        break;
    }
    return currencyDesc;
  }
})(window);


// function logout() {
//   sessionStorage.clear();
//   window.location.href = '../system/bvms-login.html';
// }
