const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  '/api': {
    target: 'https://localhost:7289',
    changeOrigin: true,
    secure: false // Define se a conexão deve ser segura (HTTPS). Pode ser ajustado conforme necessário.
  }
};
