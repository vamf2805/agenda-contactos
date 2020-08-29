<?php 
require '../database/db.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$direction = $_POST['direction'];


if(!empty($name) && !empty($phone) && !empty($email) && !empty($direction)){
    $sql = "INSERT INTO registro (nombre,telefono,correo,direccion) VALUES('$name','$phone','$email','$direction')";
    $results = mysqli_query($connection,$sql);

    if(!$results){
        die('Query Failed'.mysqli_error($connection));
    }
    echo 'add';
}else{
    echo 'false';
}


?>