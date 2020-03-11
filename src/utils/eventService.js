const BASE_URL = '/api/events/'

function getEvent() {
    return fetch(BASE_URL + 'event').then(res => res.json());
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

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
    create,
    index,
    getEvent
}