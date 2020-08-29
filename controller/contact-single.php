<?php
require '../database/db.php';

$id_user = $_POST['id_user'];

if(!empty($id_user)){
    $sql = "SELECT * FROM registro WHERE id_usuario = $id_user";
    $results = mysqli_query($connection,$sql);

    if(!$results){
        die('Query Failed'.mysqli_error($connection));
    }

    $json =array();
    while($row = mysqli_fetch_array($results)){
        $json[]=array(
            'id_user' => $row['id_usuario'],
            'name' => $row['nombre'],
            'phone' => $row['telefono'],
            'email' => $row['correo'],
            'direction' => $row['direccion']
        );
    }
    $json_string = json_encode($json[0]);
    echo $json_string;
}








?>