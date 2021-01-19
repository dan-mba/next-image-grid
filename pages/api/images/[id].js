const images = require("../../../util/database");

async function handler(req, res) {
  const {
    query: {id}
  } = req;
  
  await images.dbInit();

  await images.getImages(res, id);
}

export default handler;
