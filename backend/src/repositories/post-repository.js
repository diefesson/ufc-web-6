const { Post } = require("../models")

exports.find = async (id) => {
    return await Post.findbyPk(id)
}

exports.findAll = async () => {
    return await Post.findAll()
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