const express = require('express')
const next = require('next')
const images = require('./util/database')

const port = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  const server = express();
  await images.dbInit();

  server.get('/api/images/:id', (req, res) => {
    return images.getImageById(res, req.params.id);
  });

  server.get('/api/images', (req, res) => {
    return images.getImages(res);
  });

  server.get('/favicon.ico', (req, res) => (
    res.status(200).sendFile('favicon.ico', {root: __dirname + '/public/'})
  ));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on port ${port}`);
  });
});
