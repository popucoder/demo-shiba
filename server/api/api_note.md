
# BASE_URL: http://localhost:5500/sever/

## Authen:
```js
    API: login
        - URL: api/authen.php
        - Method: POST

        - Request: {
            "action": "login",
            "email": "tranvandiep.it@gmail.com",
            "password": "123456"
        }

        - Response: {
            "status": 1 (1: success, 0 failed),
            "msg": "Error ???"
        }

    API: login
        - URL: api/authen.php
        - Method: POST

        - Request: {
            "action": "logout"
        }

        - Response: {
            "status": 1 (1: success, 2 failed),
            "msg": "Error ???"
        }

    API: register
        - URL: api/authen.php
        - Method: POST
        - Request: {
            "action": "register",
            "fullname": "TRAN VAN DIEP",
            "username": "dieptv",
            "email": "tranvandiep.it@gmail.com",
            "password": "123456",
            "address": "Ha Noi"
        }
        - Response: {
            "status": 1 (1: success, 2 failed),
            "msg": "Error ???"
        }

    API: userList
        - URL: api/authen.php
        - Method: POST

        - Request: {
            "action": "list"
        }

        - Response: {
            "status": 1 (1: success, 2 failed),
            "msg": "Error ???",
            "userList": [
                {
                    "id": "1",
                    "fullname": "TRAN VAN DIEP",
                    "username": "dieptv",
                    "email": "tranvandiep.it@gmail.com",
                    "address": "Ha Noi"
                }, 
                {
                    "id": "2",
                    "fullname": "TRAN VAN DIEP",
                    "username": "dieptv",
                    "email": "tranvandiep.it@gmail.com",
                    "address": "Ha Noi"
                }
            ]
        }

Product:
    API: productList
        - URL: api/product.php
        - Method: POST
        - Request: {
            "action": "list"
        }
        - Response: {
            "status": 1 (1: success, 2 failed),
            "msg": "Error ???",
            "productList": [
                {
                    "id": "1",
                    "title": "Bai viet",
                    "thumbnail": "URL",
                    "updated_at": "2021-06-12 12:02"
                }, 
                {
                    "id": "2",
                    "title": "Bai viet",
                    "thumbnail": "URL",
                    "updated_at": "2021-06-12 12:02"
                }
            ]
        }
```