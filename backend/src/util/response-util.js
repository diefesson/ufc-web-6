const BAD_REQUEST = "BAD_REQUEST";
const NOT_FOUND = "NOT_FOUND";
const FORBIDDEN = "FORBIDDEN"

function errorResponse(res, status, error) {
    res.status(status).json({
        "error": error
    })
}

exports.badRequest = (res) => {
    errorResponse(res, 400, BAD_REQUEST);
}

exports.notFound = (res) => {
    errorResponse(res, 404, NOT_FOUND)
}

exports.forbidden = (res) => {
    errorResponse(res, 403, FORBIDDEN)
}

exports.successResponse = (res, data) => {
    res.status(200).json({
        data
    })
}