const path = require('path');
const sanitizeHtml = require('sanitize-html');
const Database = require('better-sqlite3');

const db = new Database(path.join(`${process.cwd()}`, '/data/images.db'), { readonly: true });

export async function getImages() {
  try {
    const stmt = db.prepare('SELECT id, title, img FROM Images');
    const images = stmt.all()
    return images;
  } catch (e){
    console.log(e);
    return [];
  }
}
  
export async function getImageById(id) {
  try {
    const stmt = db.prepare('SELECT * FROM Images WHERE id = ?');
    const image = stmt.get(id)
    return {...image, story: sanitizeHtml(image.story)}
  }
  catch {
    return null;
  }
}
