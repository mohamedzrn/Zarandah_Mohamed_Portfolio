<!DOCTYPE html>
<html lang="en">
<?php
require_once('connect.php');
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
          <a href="contact.php"><li>Contact</li></a>
          <a href="video-player.html"><li>Video-sec</li></a>
        </ul>
      </div>
    </nav>
  </header>
        
  <div class="hero-con col-span-full l-col-start-2 l-col-end-7 flex-container">
    <?php
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo '<div class="portimage" id="portimage'.$row['id'].'">   
            <a href="project_detail.php?id='.$row['id'].'">
                <div class="img-wrapper">
                    <img class="img-bkg" src="image/'.$row['image_url'].'" alt="'.$row['title'].'">
                    <div class="content fade">'.$row['description'].'</div>
                </div>
            </a>
        </div>';
    }
    $stmt = null;
    ?>
</div>



    <style>
/* Add your common styles here */

/* Media query for phones */
@media only screen and (min-width: 380px) and (max-width: 1020px) {

.flex-container {
  padding: 4rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
}

@media only screen and (min-width: 1021px) and (max-width: 1199px) {

  .img-bkg {
    width: 40rem;
  }

.flex-container {
  padding: 6rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
}

/* Media query for desktops */
@media only screen and (min-width: 1200px) {
  .flex-container {
    display: flex;
    padding: 4rem !important;
    justify-content: space-between;
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

</body>
</html>
