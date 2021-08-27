const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres"
})

const db = {}

db.User = require("./user")(sequelize)
db.Post = require("./post")(sequelize)
db.Comment = require("./comment")(sequelize)

db.User.hasMany(db.Post, { foreignKey: { allowNull: false } })
db.Post.belongsTo(db.User, { foreignKey: { allowNull: false } })
db.User.hasMany(db.Comment, { foreignKey: { allowNull: false } })
db.Comment.belongsTo(db.User, { foreignKey: { allowNull: false } })

db.Post.hasMany(db.Comment, { foreignKey: { allowNull: false } })
db.Comment.belongsTo(db.Post, { foreignKey: { allowNull: false } })

sequelize.sync({ alter: true })

module.exports = db