const {Sequelize, DataTypes } = require('sequelize');
const sanitizeHtml = require('sanitize-html');

let sequelize = null;

async function dbInit() {
  sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }
  );

  return sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    
      sequelize.define('image',{
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        title: {
          type: DataTypes.TEXT
        },
        caption: {
          type: DataTypes.TEXT
        },
        img: {
          type: DataTypes.TEXT
        },
        story: {
          type: DataTypes.TEXT
        },
        original : {
          type: DataTypes.TEXT
        }
      }, {
        timestamps: false
      });

      return sequelize;
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}

exports.getImages = async () => {
  sequelize = await dbInit();
  return sequelize.models.image.findAll({attributes: ['id', 'title', 'img']})
    .then(images => {
      return(images);
    }).catch(() => {
      return([]);
    })
  }
  
exports.getImageById = async (id) => {
  sequelize = await dbInit();
  return sequelize.models.image.findByPk(id,{raw: true})
    .then(image => {
      const clean = {...image, story: sanitizeHtml(image.story)}
      return(clean);
    }).catch(() => {
      return(null);
    })
}