<?php 
require '../database/db.php';

$sql = "SELECT * FROM registro";
$results = mysqli_query($connection,$sql);

if(!$results){
    die('Query Failed'. mysqli_error($connection));
}
$json = array();
while($row = mysqli_fetch_array($results)){
    $json["data"][] = array(
        'id_user'=> $row['id_usuario'],
        'name' => $row['nombre'],
        'direction' => $row['direccion'],
        'email' => $row['correo'],
        'phone' => $row['telefono']
    );
}
$json_string = json_encode($json);
echo $json_string;

?>