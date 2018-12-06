const endpoint = 'http://193.124.114.46:3001/api/protected/users/list';

const getUserListSuggesionsApi = async (token, suggestion) => {
    const body = {
        filter: suggestion
    };
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (response.status !== 200) {
        throw await response.text();
    }
    return response.json();
};

export default getUserListSuggesionsApi;