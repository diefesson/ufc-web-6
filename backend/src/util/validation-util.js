const defaultLimit = 10;

exports.parseLimit = function (limit) {
    if (limit == null) {
        return defaultLimit;
    }
    limit = Number(limit)
    if (!Number.isInteger(limit) || limit <= 0 || 20 < limit) {
        return null;
    }
    return limit
}

exports.parseId = function (id) {
    if (id == null) {
        return null;
    }
    id = Number(id)
    if (!Number.isInteger(id)) {
        return null;
    }
    if (id < 0) {
        return null;
    }
    return id;
}

exports.isValidText = function (text) {
    return text.match("[A-z]{3,}") != null;
}

exports.isValidDate = function (date) {
    return !isNaN(Date.parse(date));
}