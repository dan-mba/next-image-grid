const Sequelize = require('sequelize');

exports.dbInit = () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '.data/images.db'
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  const Image = sequelize.define('image',{
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Title: {
      type: Sequelize.TEXT
    },
    Img: {
      type: Sequelize.TEXT
    },
    Story: {
      type: Sequelize.TEXT
    }
  }, {
    timestamps: false
  });

  return Image;
}

exports.getImages = (res, Image) => {
  Image.findAll().then(images => {
    res.json({images});
  }).catch(() => {
    res.json({images: []});
  })
}

exports.getImageById = (res, Image, Id) => {
  Image.findByPk(Id).then(image => {
    res.json({image: image});
  }).catch(() => {
    res.json({image: null});
  })
}