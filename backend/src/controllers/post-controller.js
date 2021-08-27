const { successResponse, notFound } = require("../util/response-util")
const postRepository = require("../repositories/post-repository")
const Post = require("../domain/post")

exports.add = async (req, res) => {
    const post = new Post(
        req.body.text,
        new Date()
    )
    post.userId = req.session.userId
    successResponse(res, await postRepository.add(post))
}

exports.findAll = async (req, res) => {
    successResponse(res, await postRepository.findAll())
}