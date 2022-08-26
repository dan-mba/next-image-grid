const sanitizeHtml = require('sanitize-html');
const {dbInit} = require('./pg');

let sequelize = null;

export async function getImages() {
  if(!sequelize) sequelize = await dbInit();

  try {
    return await sequelize.models.image.findAll({attributes: ['id', 'title', 'img']})
  } catch {
    return [];
  }
}
  
export async function getImageById(id) {
  if(!sequelize) sequelize = await dbInit();

  try {
    const image = await sequelize.models.image.findByPk(id,{raw: true})
    return {...image, story: sanitizeHtml(image.story)}
  }
  catch {
    return null;
  }
}
