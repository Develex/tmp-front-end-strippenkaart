let login = function (email, password) {
    let url = "https://strippenkaart.collinfranckena.com/api/v1/login";
    let auth = 'Basic ' + btoa(email + ":" + password);
    console.log(auth);

    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem("accessToken", data.access_token);
            console.log(sessionStorage.getItem("accessToken"));
        })
        .catch((error) => {
            console.log(error);
        });
}

let register = function (email, password) {
    const url = "https://strippenkaart.collinfranckena.com/api/v1/register";
    let data = {
        "email": email,
        "password": password
    }
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


