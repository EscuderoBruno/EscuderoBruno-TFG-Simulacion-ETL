// src/models/Location.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./user');  // Importamos el modelo User

// Definición del modelo Location
const Locations = sequelize.define('Location', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coordinates: {
    type: DataTypes.JSON, // Usamos JSON para almacenar la información como un array u objeto
    allowNull: false,
    defaultValue: {
      lat: 0,
      long: 0,
      height: 0,
      alias: ''
    },
  },
  // Clave foránea que referencia al usuario
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'id',
    },
  }
});

// Relacionamos Localización con Usuario
Locations.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Locations;
