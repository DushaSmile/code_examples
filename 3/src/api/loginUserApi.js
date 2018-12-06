const endpoint = 'http://193.124.114.46:3001/sessions/create';

const loginUserApi = async loginData => {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });
    if (response.status !== 201) {
        throw await response.text();
    }
    return response.json();
};

export default loginUserApi;