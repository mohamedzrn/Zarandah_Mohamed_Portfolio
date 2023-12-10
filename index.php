<html>
<?php

require_once('connect.php');

//run queries to pull back content
$query = 'SELECT movie_id,movie_name,movie_year,rating_name FROM tbl_movies,tbl_rating WHERE tbl_movies.rating_id=tbl_rating.rating_id';
$results = mysqli_query($connect,$query);
?>
<head>
</head>
<style>
.movie_list {
background-color:#ccc;
padding:20px;
margin-bottom:50px;
}

</style>
<body>


<section>
<?php
while($row = mysqli_fetch_array($results)) {

echo '<div class="movie_list"><h2>'.$row['movie_name'].' ('.$row['movie_year'].')</h2><p>'.$row['rating_name'].'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:8888/php_week_10/details.php?id='.$row['movie_id'].'">more...</a></p></div>';

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