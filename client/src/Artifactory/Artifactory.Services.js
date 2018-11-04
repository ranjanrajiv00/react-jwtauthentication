import { authHeader } from '../Helpers/utility';
export const artifactoryService = {
    get
};
const apiUrl = 'http://localhost:5050';
function get() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/artifactory`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}