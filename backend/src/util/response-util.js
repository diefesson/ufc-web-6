
const BAD_REQUEST = "BAD_REQUEST";
const NOT_FOUND = "NOT_FOUND";

function errorResponse(res, status, error) {
    res.status(status).json({
        "error": error
    })
}

exports.badRequest = function (res) {
    errorResponse(res, 400, BAD_REQUEST);
}

exports.notFound = function (res) {
    errorResponse(res, 404, NOT_FOUND)
}

exports.successResponse = function(res, data){
    res.status(200).json({
        data
    })
}