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

    //URL: /products.php
    if(empty($_SERVER['QUERY_STRING'])) {
        doProductList();  
        die();
    }
    
    //URL: /products.php?store=2
    if(isset($_GET['store'])) {
        doProductList($_GET['store']);  
        die();
    }

    //URL: /product.php?id=1
    if(isset($_GET['id'])) {
        //getProductById()
        doGetUserById($_GET['username']);
        die();
    }

    
}


function handlePOST() {

    $action = getPOST('action');

    switch ($action) {
       
    }

}

function doProductList($store_id = 1) {
    $sql = "select * from product as p, product_details as pd
    where p.id = pd.product_id and pd.store_id = $store_id";

    $result = executeResult($sql);
    $res = [
        'status' => 1,
        'msg' => '',
        'productList' => $result
    ];
    
    echo json_encode($res);
}

