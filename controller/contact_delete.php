<?php 
require '../database/db.php';

$id_user = $_POST['id_user'];

if(!empty($id_user)){
    $sql = "DELETE FROM registro WHERE id_usuario = $id_user";
    $results = mysqli_query($connection,$sql);
    
    if(!$results){
        die('Query Failed'. mysqli_error($connection));
    }
    echo 'Usuario Eliminado con exito';
}
?>