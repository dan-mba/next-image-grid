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

  const Image = sequelize.define('Image',{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    title: {
      type: Sequelize.TEXT
    },
    caption: {
      type: Sequelize.TEXT
    },
    img: {
      type: Sequelize.TEXT
    },
    story: {
      type: Sequelize.TEXT
    },
    original : {
      type: Sequelize.TEXT
    }
  }, {
    timestamps: false
  });

  return Image;
}

exports.getImages = (res, Image) => {
  Image.findAll({attributes: ['id', 'title', 'img']})
    .then(images => {
      res.json({images});
    }).catch(() => {
      res.json({images: []});
    })
}

exports.getImageById = (res, Image, id) => {
  Image.findByPk(id).then(image => {
    res.json({image: image});
  }).catch(() => {
    res.json({image: null});
  })
}