var projectClass = function() {
    // var api_url = "https://script.google.com/macros/s/AKfycbw1wAThtRLXq5606G7nbhJk_bpFdF7eHfGDNOL4LpxFdwsmsw5mxykXQBR21ZTD7E00/exec";
    var api_url = "https://script.google.com/macros/s/AKfycbySmaITEMroIEzoE6wwKEW9mchZx9tZ8e3ZLnse0HmL8Hf7ydE5-SwS1s2F5gI2Dca2/exec";
 // var api_url = "https://script.google.com/macros/s/AKfycbySmaITEMroIEzoE6wwKEW9mchZx9tZ8e3ZLnse0HmL8Hf7ydE5-SwS1s2F5gI2Dca2/exec";
    var default_service_id = "mediana";

    //  project.api_url + '?' + $.param(data);

    function buildUrl(action, data) {
        const url = new URL(api_url);
        url.searchParams.set('action', action);
        url.searchParams.set('service_id', default_service_id);
        Object.keys(data).forEach(function(key){    
            url.searchParams.set(key, data[key]);
        });
        return url.toString();
    }

    return {
        api_url,
        default_service_id,
        buildUrl,
    }
}

const project = new projectClass();