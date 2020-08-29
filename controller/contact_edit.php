<?php 
require '../database/db.php';

$id_user = $_POST['id_user'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$direction = $_POST['direction'];

if(!empty($id_user) && !empty($name) && !empty($phone) && !empty($email) && !empty($direction)){
    $sql = "UPDATE registro SET nombre = '$name', telefono = '$phone', correo = '$email', direccion = '$direction' 
    WHERE id_usuario = $id_user ";
    $results = mysqli_query($connection,$sql);

    if(!$results){
        die('Query Failed'. mysqli_error($connection));
    }
    echo 'update';
}


?>