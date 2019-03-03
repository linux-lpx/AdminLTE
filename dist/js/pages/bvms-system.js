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
  };
  window.util.showProcess = function (type, process) {
    let processDesc;
    switch (type) {
      case 1:
        switch (process) {
          case 1:
            processDesc = '已申请';
            break;
          case 2:
            processDesc = '已授权';
            break;
          case 3:
            processDesc = '授权拒绝';
            break;
          case 4:
            processDesc = '已审核';
            break;
          case 5:
            processDesc = '审核拒绝';
            break;
          case 6:
            processDesc = '网点 => 在途';
            break;
          case 7:
            processDesc = '';
            break;
          case 8:
            processDesc = '在途 => 金库';
            break;
          default:
            processDesc = '';
            break;
        }
        break;
      case 2:
        switch (process) {
          case 1:
            processDesc = '已申请';
            break;
          case 2:
            processDesc = '已授权';
            break;
          case 3:
            processDesc = '授权拒绝';
            break;
          case 4:
            processDesc = '已审核';
            break;
          case 5:
            processDesc = '审核拒绝';
            break;
          case 6:
            processDesc = '已装箱';
            break;
          case 7:
            processDesc = '';
            break;
          case 8:
            processDesc = '已装箱确认';
            break;
          case 9:
            processDesc = '装箱确认拒绝';
            break;
          case 10:
            processDesc = '已出库确认';
            break;
          case 11:
            processDesc = '出库确认拒绝';
            break;
          case 12:
            processDesc = '目标机构已出库';
            break;
          case 13:
            processDesc = '';
            break;
          case 14:
            processDesc = '申请机构已经入库';
            break;
          default:
            processDesc = '';
            break;
        }
        break;
      default:
        break;
    }
    return processDesc;
  }
})(window);
