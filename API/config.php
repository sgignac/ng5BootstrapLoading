<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-type: application/json");


$result = array();

if ($_SERVER['REQUEST_METHOD'] === "GET") {

    $result["success"]=true;
    $result["message"]="Config provided";
    $result["results"]["data"]["companyName"] = "belair";
    $result["results"]["data"]["chatAvailable"] = true;
    $result["results"]["data"]["phoneNumber"] = "1.555.555.5555";

}


//UNSUPPORTED VERB
if ($_SERVER['REQUEST_METHOD'] !== 'GET'){
    $result["success"]=false;
    $result["message"]="Not supported";
    $result["results"]="";
}

echo json_encode($result);

?>