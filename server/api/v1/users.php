<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once('../../db/dbhelper.php');
require_once('../../utils/utility.php');

switch($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        handleGET();
        die();


    case 'POST':
        handlePOST();
        die();

}


function handleGET() {

    //URL: /users.php
    if(empty($_SERVER['QUERY_STRING'])) {
        doUserList();  
        die();
    }

    //URL: /users.php?username=abc
    if(isset($_GET['username'])) {
        doGetUserById($_GET['username']);
        die();
    }

    
}


function handlePOST() {

    $action = getPOST('action');

    switch ($action) {
        case 'list':
            doUserList();
            die(); 

    }

}

function doUserList() {
    $sql = 'select * from users';
    $result = executeResult($sql);
    $res = [
        'status' => 1,
        'msg' => '',
        'userList' => $result
    ];
    
    echo json_encode($res);
}

function doGetUserById($username) {
    $sql = "select * from users where username = '$username'";
    $result = executeResult($sql, true);
    $res = [];

    if(isset($result)) {
        $res = [
            'status' => 1,
            'msg' => '',
            'user' => $result
        ];
    } else {
        $res = [
            'status' => 0,
            'msg' => 'Not found user',
            'user' => $result
        ];
    }

    
    
    echo json_encode($res);
}