import { REACT_APP_API_URL, api } from "./config";

const ACCOUNT_API_URL = `${REACT_APP_API_URL}/account`;

// To add Account
const addAccount = async (a) => {
    const res = await api.post(`${ACCOUNT_API_URL}/addAccount`, a);

    return res.data;
};

export { addAccount };