<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


// require_once('../../utils/utility.php');
// define('HOST', 'localhost');
// define('USERNAME', 'root');
// define('PASSWORD', '');
// define('DATABASE', 'test');

// function executeResult($sql, $isSingle = false) {
// 	// Them du lieu vao database
// 	//B1. Mo ket noi toi database
// 	$conn = mysqli_connect(HOST, USERNAME, PASSWORD, DATABASE);
// 	mysqli_set_charset($conn, 'utf8');

// 	//B2. Thuc hien truy van insert
// 	$resultset = mysqli_query($conn, $sql);
    
// 	$data      = [];
	
	
// 	if($isSingle) {
// 		$data = mysqli_fetch_array($resultset, 1);
       
// 	} else {
// 		while (($row = mysqli_fetch_array($resultset, 1)) != null) {
// 			$data[] = $row;
// 		}
// 	}

// 	//B3. Dong ket noi database
// 	mysqli_close($conn);
   
// 	return $data;
// }
// $username = 'phucthinh';
// $sql = 'select * from users where username = "'.$username.'"';
// //$sql = 'select * from users';
// $result = executeResult($sql,true);
// $res = [
//     'status' => 1,
//     'msg' => '',
//     'user' => $result
// ];

// echo json_encode($res);

var_dump($_SERVER);