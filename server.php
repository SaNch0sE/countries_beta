<?php
// Functions
function savScore($connect, $name, $score)
{
	$sql = "INSERT INTO Scores (name, score) VALUES ($name, $score)";
    if ($connect->query($sql)){
        $response = "No errors";
    } else {
        $response = "Error: " . $sql . "<br>" . $connect->error;
    }
    echo $response;
}
function getScores($connect)
{
	$sql = 'SELECT name, score FROM Scores';
    if ($data = $connect->query($sql)) {
		$dbdata = array();
		if ($data->num_rows > 0) {
		    // output data of each row
		    while ($row = $data->fetch_assoc()) {
		        $dbdata[] = $row;
		    }
		} else {
		    $dbdata = "{No users}";
		}
	    echo $dbdata;
	} else {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }
}
// Config
require_once 'config.php';
// Extensions/modules
require 'connect.php';
//ini_set('display_errors', 1);
//error_reporting(E_ALL);
// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
$raw_data = serialize(json_decode(file_get_contents('php://input')));
// Find action
$action = $data['action'];
$conn = connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if ($action === 'savScore') {
    savScore($conn, $data["data"]["name"], $data["data"]["score"]);
} elseif ($action === 'getScores'){
	getScores($conn);
} else {
    echo "Error: Action not found in '" . $raw_data . "'";
}
$conn->close();
