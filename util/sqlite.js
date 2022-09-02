const path = require('path');
const {Sequelize, DataTypes } = require('sequelize');

export async function dbInit() {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(`${process.cwd()}`, '/data/images.db')
  });

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully using SQLite3.');

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
  }
  catch(err) {
    console.error('Unable to connect to the database:', err);
  }
}
