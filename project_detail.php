<!DOCTYPE html>
<?php
require_once('includes/connect.php');
$query = 'SELECT GROUP_CONCAT(image_filename) AS images, description, title, reviews, about, highlights FROM projects, media WHERE projects.id = project_id AND projects.id = :projectId';
$stmt = $connection->prepare($query);
$projectId = $_GET['id'];
$stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$images = explode(",", $row['images']);
$stmt = null;
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row['title']; ?></title>
    <link rel="stylesheet" href="css/main.css" type="text/css">

</head>
<body>

<h1><?php echo $row['title']; ?></h1>

<p><?php echo $row['description']; ?></p>
<p><?php echo $row['reviews']; ?></p>
<p><?php echo $row['about']; ?></p>
<p><?php echo $row['highlights']; ?></p>


<section class="project-gallery">
<?php 
for($i =0; $i < count($images); $i++) {

echo '<img class="portfolio-image" src="image/'.$images[$i].'" alt="Project Image">';

}
?>
</section>

</body>
</html>