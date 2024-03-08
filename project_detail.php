<!DOCTYPE html>
<?php
require_once('connect_remote.php');
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
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/grid.css" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <title>ZRN - Project Case</title>
  </head>
<body>

<h1><?php echo $row['title']; ?></h1>

<p><?php echo $row['description']; ?></p>
<p><?php echo $row['reviews']; ?></p>

<section class="project-gallery">
<?php 
for($i =0; $i < count($images); $i++) {

echo '<img class="portfolio-image" src="image/'.$images[$i].'" alt="Project Image">';

}
?>
</section>

<p><?php echo $row['about']; ?></p>
<p><?php echo $row['highlights']; ?></p>


<style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        h1 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 10px;
            padding: 0.5rem;
        }

        p {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 10px;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
        }

        .portfolio-image {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 2rem;
            height: auto;
        }
    </style>

<section class="grid-con hero-con">
    <a href="projects.php" id="explore-btn3" class="box col-span-full l-col-start-6 l-col-end-8">
        go back
    </a>
</section>

</body>
</html>