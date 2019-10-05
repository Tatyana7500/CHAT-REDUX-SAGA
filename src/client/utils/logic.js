export const getLocale = () => {
    return JSON.parse(localStorage.getItem('chat'));
};

export default {
    getLocale,
}