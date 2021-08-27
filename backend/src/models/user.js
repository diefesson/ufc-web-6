const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define(
        "users",
        {
            "username": {
                type: DataTypes.STRING,
                allowNull: false
            },

            "password": {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: false }
    )
}