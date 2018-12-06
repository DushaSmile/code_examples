const endpoint = 'http://193.124.114.46:3001/api/protected/user-info';

const getUserInfoApi = async token => {
    const response = await fetch(endpoint, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (response.status !== 200) {
        throw await response.text();
    }
    return response.json();
};

export default getUserInfoApi;