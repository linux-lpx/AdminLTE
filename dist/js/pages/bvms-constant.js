// 常量都放在这个js文件中，便于维护

const ip_loc = 'http://localhost';
// const ip_txy = 'http://118.25.107.131';
const ip_txy = 'http://localhost';
const port = ':8081';
const path = '/bvms/';

function getIpLocal() {
  return ip_loc;
}

function getIpTxy() {
  return ip_txy;
}

function getPort() {
  return port;
}

function getPath() {
  return path;
}

function getUrlLocal() {
  return ip_loc + port + path;
}

function getUrlTxy() {
  return ip_txy + port + path;
}
