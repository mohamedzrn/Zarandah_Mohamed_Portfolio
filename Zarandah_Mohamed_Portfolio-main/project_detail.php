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

    <!-- Logo -->
    <a
        href="index.html"
        class="col-span-1 col-start-1 col-end-3 l-col-start-1 l-col-end-2"
    >
        <img src="image/ZRN-Logo.svg" alt="Logo" class="logo-custom" />
            <!-- Navigation -->
    <nav class="col-span-1 col-start-12 col-end-13 l-col-start-1 l-col-end-2" role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <!-- Menu -->
            <ul id="menu">
                <a href="index.html"><li>Home</li></a>
                <a href="ABOUT.html"><li>About</li></a>
                <a href="projects.php"><li>Portfolio</li></a>
                <a href="contact.php"><li>Contact</li></a>
                <a href="video-player.html"><li>Video-sec</li></a>
            </ul>
        </div>
    </nav>
    </a>
</header>

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

/* General Styling Upgrades */
body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    color: #333;
}

/* Main Container */
.container {
    max-width: 1000px;
    padding-top: 55px;
    padding-right: 40px;
    padding-left: 40px;
    border-radius: 15px;
    /* box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); */
    margin: 0 auto;
}

/* Project Title */
.project-title {
    font-size: 2.5rem; /* Unified across desktop and mobile */
    color: #333;
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

/* Section Title */
.section-title {
    font-size: 1.8rem;
    text-align: center;
}

/* Content Section */
.content {
    align-items: center;
    text-align: justify; /* Consistent alignment */
    margin-bottom: 40px;
}

p {
    padding: 1.5rem;
    font-size: 1.2rem; /* Standardized text size */
    color: #555;
    margin-bottom: 15px;
    text-align: left; /* Unified text justification */
}

/* Project Gallery */
.project-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Flexible column layout */
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
    object-fit: fill;
    transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover .portfolio-image {
    transform: scale(1.05);
}

/* Go Back Button */
.go-back {
    display: inline-block; /* Allows it to maintain size based on content */
    padding: 12px 24px; /* Comfortable padding */
    background-color: #885A5A;
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
    background-color: #B47E7E;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .project-title {
        font-size: 2rem;
    }

    p {
        font-size: 1.1rem;
        text-align: left;
    }

    .project-gallery {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Smaller columns */
    }
    
    /* Go Back Button */
    .go-back {
        display: inline-block; /* Allows it to maintain size based on content */
        padding: 12px 24px; /* Comfortable padding */
        background-color: #885A5A;
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
}

@media (max-width: 480px) {
    .project-title {
        font-size: 2rem;
    }

    .go-back {
        padding: 10px 20px;
    }
}

</style>

</body>
</html>
