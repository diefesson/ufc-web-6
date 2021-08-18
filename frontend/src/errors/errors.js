

class DomainError {
    constructor(message, cause) {
        this.message = message
        this.cause = cause
    }
}

class NotFoundError extends DomainError {
    constructor() {
        super("not found", null)
    }
}

class BadRequestError extends DomainError {
    constructor() {
        super("bad request", null)
    }
}

class UnknownAPIError extends DomainError {
    constructor(cause) {
        super("unknow api error", cause)
    }
}

class UnknownError extends DomainError {
    constructor(cause) {
        super("unknown error", cause)
    }
}


function errorFromResponse(response) {
    switch (response.data.error) {
        case "NOT_FOUND":
            return NotFoundError
        case "BAD_REQUEST":
            return BadRequestError
        default:
            return UnknownAPIError(response.data.error)
    }
}

export {
    DomainError, NotFoundError, BadRequestError, UnknownAPIError, UnknownError, errorFromResponse
}