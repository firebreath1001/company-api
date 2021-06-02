const Sequalize = require('sequelize');

const sequelize = require('../util/database');

const Address = sequelize.define('addresses', {
    // empId: {
    //     type: Sequalize.INTEGER,
    //     allowNull: false,
    //     primaryKey : true
    // },
    housename: {
        type: Sequalize.STRING,
        allowNull:false
    },
    city: {
        type: Sequalize.STRING,
        allowNull: false
    },
   state: {
        type: Sequalize.STRING,
        allowNull: false
    },
    pincode: {
        type: Sequalize.INTEGER,
        allowNull: false
    },
    street: {
        type: Sequalize.STRING,
        allowNull: false
    }
});

module.exports = Address;
