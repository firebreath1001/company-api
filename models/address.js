const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Address = sequelize.define('address', {
    empid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true
    },

    housename: {
        type: DataTypes.STRING,
        allowNull:false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
   state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pincode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Address;
