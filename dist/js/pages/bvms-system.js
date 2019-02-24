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


function logout() {
  sessionStorage.clear();
  window.location.href = '../system/bvms-login.html';
}
