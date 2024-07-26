const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000; // Porta do seu servidor proxy

app.use('/api', createProxyMiddleware({
  target: 'https://secure.logmeinrescue.com', // Substitua pela URL de destino
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove '/api' do início da URL quando encaminhar a solicitação
  },
}));

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
});
