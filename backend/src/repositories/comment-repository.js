const { Comment, Post } = require("../models")
const comment = require("../models/comment")

exports.find = async (id) => {
    return await Comment.findOne(id)
}

exports.findAll = async (postId) => {
    const where = {}
    if (postId != null) {
        where["postId"] = postId
    }
    return await Comment.findAll({
        where
    })
}

exports.add = async (comment) => {
    return await Comment.create(comment)
}

exports.update = async (comment) => {
    return await Comment.update(comment, {
        where: { id: comment.id }
    })
}

exports.remove = async (id) => {
    return await Comment.destroy({
        where: { id }
    })
}