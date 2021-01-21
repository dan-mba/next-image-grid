const images = require("../../util/database");

async function handler(req, res) {
  await images.dbInit();

  await images.getImages(res);
}

export default handler;
