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
  onProxyRes: (proxyRes, req, res) => {
    // Adiciona cabeçalhos CORS na resposta do proxy
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  },
}));

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
});
