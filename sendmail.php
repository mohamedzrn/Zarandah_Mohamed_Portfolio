<?php

require_once('connect.php');

// Check if the request is coming with POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Gather the form content
    $full_name = $_POST['user_name'] ?? '';
    $email = $_POST['user_email'] ?? '';
    $msg = $_POST['user_message'] ?? '';

    $errors = [];

    // Validate and clean these values
    $full_name = trim($full_name);
    $email = trim($email);
    $msg = trim($msg);

    if(empty($full_name)) {
        $errors['full_name'] = 'Your name cannot be empty';
    }

    if(empty($msg)) {
        $errors['comments'] = 'Comment field cannot be empty';
    }

    if(empty($email)) {
        $errors['email'] = 'You must provide an email';
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['legit_email'] = 'You must provide a REAL email';
    }

    if(empty($errors)) {
        // Use prepared statement to avoid SQL injection
        $query = "INSERT INTO contacts (fname, email, message) VALUES (?, ?, ?)";
        $stmt = mysqli_prepare($connect, $query);

        // Bind parameters
        mysqli_stmt_bind_param($stmt, "sss", $full_name, $email, $msg);

        // Execute the statement
        if(mysqli_stmt_execute($stmt)) {
            // Format and send these values in an email
            $to = 'mohammedzrn13@gmail.com';
            $subject = 'Message from your Portfolio site!';
            $message = "You have received a new contact form submission:\n\n";
            $message .= "Name: " . $full_name . "\n";
            $message .= "Email: " . $email . "\n";
            $message .= "Message: " . $msg . "\n";

            mail($to, $subject, $message);

            echo 'Thank you for contacting us!';
        } else {
            echo 'Error: ' . mysqli_error($connect);
        }

        // Close the statement
        mysqli_stmt_close($stmt);
    } else {
        // Handle your errors appropriately
        echo json_encode($errors);
    }
} else {
    // Not a POST request
    echo 'Invalid request method.';
}

// Close the connection
mysqli_close($connect);
?>
