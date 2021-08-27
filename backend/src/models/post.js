const { DataTypes, Sequelize } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define(
        "posts",
        {
            text: {
                type: DataTypes.STRING,
                allowNull: false
            },

            timestamp: {
                type: "TIMESTAMP",
                allowNull: false
            }
        },
        {timestamps: false}
    )
}