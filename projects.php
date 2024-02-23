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

    <style>
              @media screen and (min-width: 1200px) {
                #portfolio h1 {
                font-size: 6rem;
                margin-top: 6rem;
                line-height: 8rem;
                }
              }

              @media screen and (min-width: 380px) and (max-width: 1199px) {
                #portfolio {
                font-size: 3.5rem;
                }
              }
    </style>

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

<?php

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

  echo  '<section class="project-con"><h3>'.$row['title'].'</h3><a href="project_detail.php?id='.
$row['id'].
'"><img class="thumbnail" src="image/'.    
        $row['image_url'].   
        '" alt="Project Thumbnail"></a><p>'.   
        $row['description'].  
        '</p></section>';
}

$stmt = null;

?> 


</body>
</html>
