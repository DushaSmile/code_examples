const endpoint = 'http://193.124.114.46:3001/users';

const registerUserApi = async registerData => {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    });
    if (response.status !== 201) {
        throw await response.text()
    }
    return response.json();
};

export default registerUserApi;