const { Post, Comment, User } = require("../models")

exports.find = async (id) => {
    return await Post.findbyPk(id)
}

exports.findAll = async () => {
    return await Post.findAll({
        include: [
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ["id", "username"]
                },
                attributes: { exclude: "userId, postId" }
            },
            {
                model: User,
                attributes: ["id", "username"],
            },
        ],
        attributes: { exclude: ["userId"] }
    })
}

exports.add = async (post) => {
    console.log(post)
    return await await Post.create(post)
}

exports.update = async (post) => {
    return await Post.update(
        post,
        {
            where: { id: post.id }
        }
    )
}

exports.remove = async (id) => {
    return await Post.destroy({
        where: { id }
    })
}