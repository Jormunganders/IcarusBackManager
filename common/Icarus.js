function get(url, data, action) {
    $.ajax({
        type: 'get',
        xhrFields: {
            withCredentials: true
        },
        url: url,
        data: data,
        cache: false,
        dataType: 'json',
        success: action
    })
}

function post(url, data, action) {
    $.ajax({
        type: 'post',
        xhrFields: {
            withCredentials: true
        },
        url: url,
        data: data,
        cache: false,
        dataType: 'json',
        success: action
    })
}

function fromJson(json) {
    if (typeof json === 'string') {
        return eval('(' + json + ')');
    } else {
        console.log("The Json must be string!!");
        return null;
    }
}



