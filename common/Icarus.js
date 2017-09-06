function get(url, data, action) {
    $.get(url, data, action);
}

function post(url, data, action) {
    $.post(url, data, action);
}

function fromJson(json) {
    if (typeof json === 'string') {
        return eval('(' + json + ')');
    } else {
        console.log("The Json must be string!!");
        return null;
    }
}



