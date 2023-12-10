<html>
<?php

require_once('connect.php');

//run queries to pull back content
$query = 'SELECT
'media' AS table_name,
media_type,
media_url,
NULL AS name,
NULL AS title,
NULL AS email,
NULL AS phone,
NULL AS website,
NULL AS location,
NULL AS summary,
NULL AS project_title,
NULL AS project_description,
NULL AS project_link,
NULL AS main_media_url,
NULL AS service_name,
NULL AS service_description,
NULL AS platform,
NULL AS social_link_url,
NULL AS toolbox_name,
NULL AS toolbox_description
FROM media

UNION ALL

SELECT
'personal_info' AS table_name,
NULL,
NULL,
name,
title,
email,
phone,
website,
location,
summary,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL
FROM personal_info

UNION ALL

SELECT
'projects' AS table_name,
NULL,
NULL,
NULL,
NULL,
NULL,
title,
description,
link,
main_media_url,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL
FROM projects

UNION ALL

SELECT
'services' AS table_name,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
service_name,
description,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL
FROM services

UNION ALL

SELECT
'social_links' AS table_name,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
platform,
social_link_url,
NULL,
NULL,
NULL,
NULL,
NULL
FROM social_links

UNION ALL

SELECT
'toolbox' AS table_name,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
NULL,
toolbox_name,
toolbox_description
FROM toolbox;
';
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

echo '';

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