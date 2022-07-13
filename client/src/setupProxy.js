const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://coool-website.herokuapp.com/',
    createProxyMiddleware({
      target: 'http://localhost:3001/',
      changeOrigin: true,
    })
  );
};