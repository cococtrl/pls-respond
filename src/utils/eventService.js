const BASE_URL = '/api/events/'

function create(data) {
    return fetch(BASE_URL, {
        mehtod: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('something went wrong!');
    })
}

export default {
    create
}