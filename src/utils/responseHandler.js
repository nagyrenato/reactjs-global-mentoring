export const handleResponse = (response) => {

    switch (response.status) {
        case 200:
        case 201:
            return response.json();
        case 204:
            return response;
        default:
            throw response.json();
    }
}

export const logError = (errorDescription, error) => {
    Promise.resolve(error)
           .then(e => e.messages || [])
           .then(messages => console.error(errorDescription, "\n", messages.join(", ")))
}