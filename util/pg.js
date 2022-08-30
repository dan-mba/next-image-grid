const {Sequelize, DataTypes } = require('sequelize');

export async function dbInit() {
  const sequelize = new Sequelize(
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

  try {
    await sequelize.authenticate()
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
  }
  catch(err) {
    console.error('Unable to connect to the database:', err);
  }
}
