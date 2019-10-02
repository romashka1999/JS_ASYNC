
function ajax(resolve, reject, url) {
    const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = (data) => resolve(data);
        xhr.onerror = (err) => reject(err);
        xhr.send();
}

function getDataPromise(url) {
    return new Promise( (resolve, reject) => {
        ajax(resolve, reject, url);
    });
}

function getData(url) {
        const dt = getDataPromise(url);
        dt.then( (data) => {
            console.log(data.currentTarget.response)
            mygen.next();
        }, (err) => {
            console.log(err);
        })
}

function* getDataGenerator() {
        getData('https://jsonplaceholder.typicode.com/users')
    yield
        getData('https://jsonplaceholder.typicode.com/posts')
    yield
        getData('https://jsonplaceholder.typicode.com/comments')
}

var mygen = getDataGenerator();
mygen.next()










