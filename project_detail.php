<!DOCTYPE html>
<?php
require_once('./includes/connect-remote.php');
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

      <header class="grid-con" id="main-header">
        <h2 class="hidden">Top Navigation</h2>

        <a
          href="index.html"
          class="col-span-1 col-start-1 col-end-3 l-col-start-1 l-col-end-2"
        >
          <img src="image/ZRN-Logo.svg" alt="Logo" class="logo-custom" />
        </a>

        <nav
          class="col-span-1 col-start-12 col-end-13 l-col-start-1 l-col-end-2"
          role="navigation"
        >
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="index.html"><li>Home</li></a>
              <a href="ABOUT.html"><li>About</li></a>
              <a href="projects.php"><li>Portfolio</li></a>
              <a href="contact.php"><li>Contact</li></a>
              <a href="video-player.html"><li>Video-sec</li></a>
            </ul>
          </div>
        </nav>
      </header>

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
            font-family: 'Poppins', sans-serif;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
            background: #ffffff;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-radius: 10px;
        }

        h1 {
            font-size: 2.2rem;
            color: brown;
            margin-bottom: 20px;
            font-weight: 700;
            text-align: center;
        }

        p {
            padding: 1.5rem;
            font-size: 1.5rem;
            line-height: 2.2rem;
        }

        .project-gallery {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 30px;
        }

        .portfolio-image {
            max-width: calc(50% - 20px);
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.08);
            transition: transform 0.3s ease-in-out;
        }

        .portfolio-image:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.12);
        }

        .go-back {
            display: inline-block;
            padding: 10px 15px;
            color: #fff;
            border-radius: 5px;
            text-align: center;
            text-decoration: none;
            font-weight: 500;
            margin-top: 20px;
            transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
        }

        .go-back:hover {
            transform: translateY(-2px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
            .portfolio-image {
                max-width: 90%;
            }
        }
    </style>

<section class="grid-con hero-con">
    <a href="projects.php" id="explore-btn3" class="box col-span-full l-col-start-6 l-col-end-8">
        go back
    </a>
</section>

</body>
</html>