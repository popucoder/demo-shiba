const BASE_URL = 'http://localhost/demo-shibashop/client/';

//=====================API===========================
//BASE URL API
const BASE_API_URL = 'http://localhost/demo-shibashop/server/';

//USERS API
const USERS_API = 'api/v1/users.php';

//Action

//Authen API
const API_AUTHEN = 'api/v1/authen.php';
// Action
const AUTHEN_LOGIN = 'login';
const AUTHEN_REGISTER = 'register';
const AUTHEN_USER_LIST = 'list';

//Store API
const API_STORE = 'api/v1/store.php';

//Product API 
const API_PRODUCT = 'api/v1/product.php';

//Cart API 
const API_CART = 'api/v1/cart.php';






//=====================DOM===========================
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getParent =  function(element, parentName) {
    while(element.parentElement) {
        if(element.parentElement.matches(parentName)) {
            return element.parentElement;
        }
        element = element.parentElement
    }
}

//======================AJAX===========================
function sendRequest(method, url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleResult;
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    data = Object.entries(data).reduce((acc, curr) => {
        if (acc == '') return curr[0] + '=' + curr[1];
        return acc + '&' + curr[0] + '=' + curr[1];
    }, '');

    xhr.send(data);

    function handleResult() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(xhr.response));
        }
    }
}

//======================COOKIE===========================
function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}


