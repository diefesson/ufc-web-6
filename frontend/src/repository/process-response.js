import { errorFromResponse, UnknownError } from "../errors/errors"

async function processResponse(responsePromise) {
    try {
        let response = await responsePromise
        return [response.data.data, null]
    } catch (error) {
        if (error.response) {
            return [null, errorFromResponse(error.response)]
        } else {
            return [null, UnknownError(error)]
        }
    }
}

export default processResponse