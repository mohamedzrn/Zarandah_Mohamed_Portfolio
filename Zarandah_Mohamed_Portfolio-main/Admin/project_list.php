<!DOCTYPE html>
<html lang="en">

<?php
session_start();

if(!$_SESSION['username']) {
  header( 'Location: login_form.php');
}

require_once('../includes/connect.php');
$stmt = $connect->prepare('SELECT id,title FROM projects ORDER BY title ASC');
$stmt->execute();
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS Main Page</title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">

    <style>

        

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5ebe0;
            margin: 0;
            padding: 0;
        }

        h3 {
            font-size:  25px;
            color: #333;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .project-list {
            background-color: #fff;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            max-width: 45rem;
            padding: 10px;
            border: 1px solid #ccc;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            font-size: 1.2em;
            margin-left: 36rem;
        }

        form {
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            border-radius: 12px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #333;
        }

        input[type="text"],
        input[type="file"],
        textarea {
            background: none;
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
        }

        a {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            color: #337ab7;
            text-decoration: none;
            padding-left:  5rem;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

    <?php
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo '<p class="project-list">' . $row['title'] .
            '<a href="edit_project_form.php?id=' . $row['id'] . '">edit</a>' .
            '<a href="delete_project.php?id=' . $row['id'] . '">delete</a></p>';
    }

    $stmt = null;
    ?>
    <br><br><br>
    <h3>Add a New Project</h3>
    <form action="add_project.php" method="post" enctype="multipart/form-data">
        <label for="title">Project Title: </label>
        <input name="title" type="text" required><br><br>
        <label for="thumb">Project Thumbnail: </label>
        <input name="thumb" type="file" required><br><br>
        <label for="desc">Project Description: </label>
        <textarea name="desc" required></textarea><br><br>
        <input name="submit" type="submit" value="Add">
    </form>
    <br><br><br>
    <a href="logout.php">Log Out</a>
</body>

</html>
