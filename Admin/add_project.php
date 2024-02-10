<?php
require_once('../includes/connect.php');
$query = "INSERT INTO projects (title,description,image_url) VALUES (?,?,?)";

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['desc'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['thumb'], PDO::PARAM_STR);

$stmt->execute();
//$last_id = $connection->lastInsertId();
$stmt = null;
header('Location: project_list.php');
?>