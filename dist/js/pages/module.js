(function(win) {
  if (win.slide === undefined) {
    win.slide = {}
  }
  win.slide.getModule = function(id, name, fun) {
    if (typeof fun !== 'function') {
      alert('slide getModule must be function');
      return;
    }
    if (win.slide.parentModuleAvailable) {
      fun(win.slide.parentModuleAvailable);
      return;
    }
    let that = this;
    let url = getUrlLocal() + 'system_module/all' + '?loginName=' + name + '&id=' + id;
    if (name === 'system') {
      url = getUrlLocal() + 'system_module/allModule';
    }
    $.ajax({
      url: url,
      type: 'GET',
      success: function (data) {
        if (data.isSuccess) {
          let parentModuleAvailable = data.result.filter(function (vaule) {
            if (vaule.isAvailable === 1) {
              let children = data.result.filter(function (item) {
                if (item.parentId === vaule.id && item.isAvailable === 1) {
                  return item;
                }
              });
              return vaule['children'] = children;
            }
          });
          win.slide.parentModuleAvailable = parentModuleAvailable;
          fun(win.slide.parentModuleAvailable);
        } else {
          fun(data.result);
        }
      },
      error: function () {
        fun({
          error: '与服务器通信失败，请联系管理员',
          code: 500
        });
        console.log('与服务器通信失败，请联系管理员');
      }
    });
  }
})(window);