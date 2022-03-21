<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once('../../db/dbhelper.php');
require_once('../../utils/utility.php');

$action = getPOST('action');

switch($action) {
    case 'add':
        handleAdd();
        die();

}
function handleAdd() {
    $token = $_COOKIE['token'];
    if(empty($token)) die();
    $productId = getPOST('productId');
    $storeId = getPOST('storeId');
    $amount = getPOST('amount');
}