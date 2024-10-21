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
    <title>ZRN - Project Bootcamp</title>
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

<!-- <header class="grid-con" id="main-header">
    <a href="index.html" class="col-span-1 col-start-1 col-end-3 l-col-start-1 l-col-end-2">
      <img src="image/ZRN-Logo.svg" alt="Logo" class="logo-custom" />
    </a>

    <nav class="col-span-1 col-start-12 col-end-13 l-col-start-1 l-col-end-2" role="navigation">
      <div id="menuToggle">
        <input type="checkbox">
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
  </header> -->

<div class="container">
    <!-- Title Section -->
    <h1 class="project-title"><?php echo $row['title']; ?></h1>

        <!-- Gallery Section -->
    <section class="project-gallery">
        <?php 
        for($i = 0; $i < count($images); $i++) {
            echo '<div class="image-wrapper">';
            echo '<img class="portfolio-image" src="image/'.$images[$i].'" alt="Project Image">';
            echo '</div>';
        }
        ?>
    </section>

<!-- Description and Reviews Section -->
<section class="content">
    <h2 class="section-title">Description</h2>
    <p class="description"><?php echo $row['description']; ?></p>
    
    <h2 class="section-title">Reviews</h2>
    <p class="reviews"><?php echo $row['reviews']; ?></p>
</section>

<!-- About and Highlights Section -->
<section class="about">
    <h2 class="section-title">About</h2>
    <p class="about-text"><?php echo $row['about']; ?></p>

    <h2 class="section-title">Highlights</h2>
    <p class="highlights"><?php echo $row['highlights']; ?></p>
</section>

    <!-- Go Back Button -->
    <a href="projects.php" class="go-back">Go Back</a>
</div>





<!-- Styles -->
<style>
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: beige;
            color: #333;
        }

/* Main Container */
.container {
    max-width: 1000px;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* Project Title */
.project-title {
    color: #333;
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

/* Content Section */
.content {
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
}

        p {
            padding: 1.5rem;
            font-size: 1.5rem;
            color: #555;
            margin-bottom: 15px;
            text-align: justify;
            text-justify: inter-word;
        }

/* Project Gallery */
.project-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.image-wrapper {
    position: relative;
    overflow: hidden;
}

.portfolio-image {
    width: 100%;
    height: 100%;
    object-fit:  fill;
    transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover .portfolio-image {
    transform: scale(1.05);
}

/* Go Back Button */
.go-back {
    display: inline-block;
    padding: 12px 24px;
    background-color: brown;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    letter-spacing: 1px;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
    margin-top: 30px;
}

.go-back:hover {
    transform: translateY(-3px);
    background-color: #ff5e39;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .project-title {
        font-size: 2rem;
    }

    .description, .reviews {
        font-size: 1.1rem;
    }

    .project-gallery {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

@media (max-width: 480px) {
    .project-title {
        font-size: 2.5rem;
    }

    .go-back {
        padding: 10px 20px;
    }
}
</style>

</body>
</html>
