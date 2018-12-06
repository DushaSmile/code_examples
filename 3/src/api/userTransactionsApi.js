const endpoint = 'http://193.124.114.46:3001/api/protected/transactions';

export const getUserTransactionsApi = async token => {
    const response = await fetch(endpoint, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (response.status !== 200) {
        throw await response.text();
    }
    return response.json()
};

export const createUserTransactionApi = async (token, transaction) => {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    });
    if (response.status !== 200) {
        throw await response.text();
    }
    return response.json();
};