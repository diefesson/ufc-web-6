const { successResponse } = require("../util/response-util")
const CommentRepository = require("../repositories/comment-repository")
const Comment = require("../domain/comment")

exports.add = async (req, res) => {
    const comment = new Comment(
        req.body.text,
        new Date()
    )
    comment.postId = req.body.postId
    comment.userId = req.session.userId
    successResponse(res, await CommentRepository.add(comment))
}

exports.findAll = async (req, res) => {
    successResponse(res, await CommentRepository.findAll(req.params.postId))
}