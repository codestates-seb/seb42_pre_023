const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://b46a-183-97-121-150.jp.ngrok.io", 
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};