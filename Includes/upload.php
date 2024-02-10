<?php
    $target_file = '../image/img'.time();
    $imageFileType = strtolower(pathinfo($_FILES['uploaded']['name'], PATHINFO_EXTENSION));
    $target_file .= '.'.$imageFileType;
    //move_uploaded_file($_FILES['uploaded']['tmp_name'], $target_file);




    /* Check if image file is a actual image or another malicious file
    if(isset($_POST['submit'])) {
        $check = getimagesize($_FILES['uploaded']['tmp_name']);
        if($check !== false) {
            echo 'File is an image - ' . $check['mime'] . '.';
            $uploadOk = 1;
        } else {
            echo 'File is not an image.';
            $uploadOk = 0;
        }
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        echo 'Sorry, file already exists.';
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES['uploaded']['size'] > 500000) { // 500KB limit
        echo 'Sorry, your file is too large.';
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($imageFileType != 'jpg' && $imageFileType != 'png' && $imageFileType != 'jpeg'
    && $imageFileType != 'gif' ) {
        echo 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';
        $uploadOk = 0;
    }else{

    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo 'Sorry, your file was not uploaded.';
    // if everything is ok, try to upload file
    } else {
    ********** if (move_uploaded_file($_FILES['uploaded']['tmp_name'], $target_file)) {
            echo 'The file '.$target_file. ' has been uploaded.';
        } else {
            echo 'Sorry, there was an error uploading your file.';
        }
    }
?>
