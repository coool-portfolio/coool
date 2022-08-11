const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "https://coool-website.herokuapp.com/",
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  )
};