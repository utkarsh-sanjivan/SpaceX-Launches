import axios from './../utils/axios';

function getUrl(params) {
    return Object.keys(params).reduce((acc, curKey) => {
        if (params[curKey] !== '') return `${acc}&${curKey}=${params[curKey]}`;
        return acc;
    }, 'launches?limit=100');
}

export async function getLaunchListAPI(params) {
    const url = getUrl(params);
    const response = await axios.get(url, {});
    const isSuccess = response.status >=200 && response.status < 300;
    if (isSuccess) {
    return response.data;
    }
    throw response.status;
}
