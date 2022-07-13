const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://coool-website.herokuapp.com/',
    createProxyMiddleware({
      target: '/',
      changeOrigin: true,
    })
  );
};