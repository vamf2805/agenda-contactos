<?php 
require 'database/db.php';

$sql = "SELECT * FROM registro";
$results = mysqli_query($connection,$sql);

if(!$results){
    die('Query Failed'. mysqli_error($connection));
}
$json = array();
while($row = mysqli_fetch_array($results)){
    $json[] = array(
        'id_usuario'=> $row['id_usuario'],
        'nombre' => $row['nombre'],
        'direccion' => $row['direccion'],
        'correo' => $row['correo']
    );
}
$json_string = json_encode($json);
echo $json_string;

?>