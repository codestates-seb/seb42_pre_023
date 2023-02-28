const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://69e4-183-97-121-150.jp.ngrok.io", 
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};