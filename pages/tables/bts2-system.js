import './constant.js'

function getMOdule() {
  let that = this;
  $.ajax({
    url: getIpTxy() + getPort() + getPath() + 'system_module/all',
    type: 'GET',
    success: function (data) {
      that.parentModuleAvailable = data.result.filter(function (vaule) {
        if (vaule.isAvailable === 1) {
          let children = data.result.filter(function (item) {
            if (item.parentId === vaule.id && item.isAvailable === 1) {
              return item;
            }
          });
          return vaule['children'] = children;
        }
      });
    }
  });
}
