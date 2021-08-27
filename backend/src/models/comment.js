const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "comments",
        {
            text: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            timestamp: {
                type: "TIMESTAMP",
                allowNull: false
            }
        },
        { timestamps: false }
    )
}