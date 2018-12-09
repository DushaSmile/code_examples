export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cities');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export const saveState = cities => {
    try {
        const serializedState = JSON.stringify(cities);
        localStorage.setItem('cities', serializedState);
    } catch (e) {
        console.log(e);
    }
};