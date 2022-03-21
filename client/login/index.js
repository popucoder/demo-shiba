$('.form__btn-login').onclick = (e) => {
    e.preventDefault();

    let username = $('#username').value;
    let password = $('#password').value;
    

    let url = BASE_API_URL + API_AUTHEN;
    
    let req = {
        action: AUTHEN_LOGIN,
        username,
        password,
    }
    sendRequest('POST', url, req, (res) => {
        if(res.status == 1) {
            //messager 
            window.location.href = BASE_URL;

        }
    }) 
} 