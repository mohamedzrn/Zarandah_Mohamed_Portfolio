<!DOCTYPE html>
<html lang="en">
<?php
require_once('includes/connect.php');
$stmt = $connection->prepare('SELECT * FROM projects ORDER BY title ASC');
$stmt->execute();
?>

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
      
  <a href="index.html" class="col-span-1 col-start-1 col-end-3 l-col-start-1 l-col-end-2">
    <img src="image/ZRN-Logo.svg" alt="Logo" class="logo-custom" />
  </a>

    <nav
      class="col-span-1 col-start-12 col-end-13 l-col-start-1 l-col-end-2" role="navigation">
      <div id="menuToggle">
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
        <a href="index.html"><li>Home</li></a>
          <a href="ABOUT.html"><li>About</li></a>
          <a href="projects.php"><li>Portfolio</li></a>
          <a href="contact.html"><li>Contact</li></a>
          <a href="video-player.html"><li>Video-sec</li></a>
        </ul>
      </div>
    </nav>
  </header>


      <section class="grid-con hero-con">
        <div class="col-span-full col-start-1 col-end-4 l-col-start-3 l-col-end-9" id="portfolio">
          <h1 class="cipher">PORTFOLIO</h1>
        </div>
        <div class="col-span-full col-start-1 col-end-5 l-col-start-3 l-col-end-9" id="portfoliodesc">
          <p>
            Here is a collection of my work, from little to huge size, that
            brings brands and creative ambitions to life. A wide variety,
            including self-made projects, and interactive websites.
          </p>
        </div>
      </section>
        
    <?php
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo '<section class=" hero-con project-con" style="padding: 10px; margin-bottom: 20px;">
        <h3 class="hidden">'.$row['title'].'</h3>
        <a href="project_detail.php?id='.$row['id'].'">
          <img class="thumbnail" src="image/'.$row['image_url'].'" alt="Project Thumbnail"">
        </a>
        <p class="desc">
            <class=desc>'.$row['description'].'
        </p>
      </section>';
    }
    $stmt = null;
    ?>


    <style>
/* Add your common styles here */

/* Media query for phones */
@media only screen and (min-width: 380px) and (max-width: 1199px) {
    .thumbnail {
    max-width: fit-content;
    padding-left: 5rem;
    margin-top: 100px;
    }

    .desc {
      margin-top: 2rem;
      width: 30rem;
      font-size: 1.5rem; 
      line-height: 2rem; 
      text-align: center;
      margin-left: 5rem;
    }

}

/* Media query for desktops */
@media only screen and (min-width: 1200px) {
  .thumbnail {
    max-width: fit-content;
    padding-left: 5rem;
    margin-top: 100px;
    }

    .desc {
      margin-left: 45rem;
      display: flex;
      font-style: italic;
      width: 1000px;
      font-size: 1.7rem;
      margin-bottom: 10rem;
      line-height: 2.5rem;
      align-content: stretch;
      justify-content: space-evenly;
      align-items: center;
    }
}
</style>

        <section class="grid-con hero-con">

          <div class="col-span-full" id="aboutmetitle">
            <h1 class="cipher">ABOUT ME</h1>
          </div>

          <div class="col-span-full l-col-start-4 l-col-end-10" id="aboutmedesc">
            <p>
              Learn more about who I am and the type of mindsets I bring to
              creative challenges and projects.
            </p>
          </div>
          <a href="about.html" id="explore-btn3" class="box col-span-full l-col-start-6 l-col-end-8">
            EXPLORE
          </a>
        </section>

    </main>
</body>
</html>
