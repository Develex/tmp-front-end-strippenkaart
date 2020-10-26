const userTable = $("#userTable").DataTable({
    columns: [
        {title: "ID", data: "id"},
        {title: "Email", data: "email"},
        {title: "Roles", data: "roles"},
        {title: "Active.", data: "active"}
    ]
});

let getUserData = function () {
    let url = "https://strippenkaart-api.dev-collin.nl/api/v1/user";
    let auth = 'Bearer ' + sessionStorage.getItem("accessToken");

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': auth,
            'Content-type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem("accessToken", data.access_token);
            const responseData = Array.from(data.data);
            userTable.rows.add(responseData).draw();
        });
}


// let getUserData = function () {
//     let url = "https://strippenkaart-api.dev-collin.nl/api/v1/user";
//     let auth = 'Bearer ' + sessionStorage.getItem("accessToken");
//
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Authorization': auth,
//             'Content-type': 'application/json'
//         },
//     })
//         .then(response => response.json())
//         .then(data => {
//             sessionStorage.setItem("accessToken", data.access_token);
//
//             const responseData = Array.from(data.data);
//             responseData.forEach(element => {
//                 dataTable.rows().add(Object.values(element));
//             });
//         });
// }
