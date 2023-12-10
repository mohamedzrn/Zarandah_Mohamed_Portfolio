<html>
<?php

require_once('connect.php');

//run queries to pull back content
$query = 'SELECT * FROM tbl_movies, tbl_rating WHERE tbl_movies.rating_id = tbl_rating.rating_id AND tbl_movies.movie_id ='.$_GET['id'];

//$_GET[] is a pre-built srray in PHP, that stores any value coming from a URL

$results = mysqli_query($connect,$query);
?>
<head>
</head>

<body>
<section>
<?php

$row = mysqli_fetch_assoc($results);

echo '<div class="movie_list"><h1>'.$row['movie_name'].'</h1></div>';

?>
</section>

</section>



<section>

    <?php
    while($row = mysqli_fetch_array($results)) {
    echo $row['movie_year'];
    }
?>
</section>


<footer>
<?php 
echo date("F j, Y, g:i a"); 
?>

</footer>
</body>
</html>