const express = require('express')
const next = require('next')
const images = require('./util/database')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  const Image = images.dbInit();

  server.get('/api/images/:id', (req, res) => {
    return images.getImageById(res, Image, req.params.id);
  });

  server.get('/api/images', (req, res) => {
    return images.getImages(res, Image);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on port ${port}`);
  });
});
