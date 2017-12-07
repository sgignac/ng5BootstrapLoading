<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-type: application/json");


$result = array();

if ($_SERVER['REQUEST_METHOD'] === "GET") {

    $result["success"]=true;
    $result["message"]="Labels provided";
    $result["results"]["data"]["welcomeTitle"] = "Bonjour cher client";
    $result["results"]["data"]["firstName"] = "Prénom";
    $result["results"]["data"]["lastName"] = "Nom de famille";
    $result["results"]["data"]["dob"] = "Date de naissance";

}


//UNSUPPORTED VERB
if ($_SERVER['REQUEST_METHOD'] !== 'GET'){
    $result["success"]=false;
    $result["message"]="Not supported";
    $result["results"]="";
}


echo json_encode($result);

?>