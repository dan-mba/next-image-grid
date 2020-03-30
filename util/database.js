const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: process.env.NODE_ENV==='production'  //only reject unauthorized in prod
      }
    }
  }
);
  
exports.dbInit = async () => {
  sequelize
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

    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}

exports.getImages = (res) => {
  sequelize.models.image.findAll({attributes: ['id', 'title', 'img']})
    .then(images => {
      res.json({images});
    }).catch(() => {
      res.json({images: []});
    })
}

exports.getImageById = (res, id) => {
  sequelize.models.image.findByPk(id).then(image => {
    res.json({image: image});
  }).catch(() => {
    res.json({image: null});
  })
}