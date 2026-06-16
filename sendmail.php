<?php

require_once('./includes/connect.php');

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
        try {
            // Use prepared statement to avoid SQL injection
            $query = "INSERT INTO contacts (fname, email, message) VALUES (?, ?, ?)";
            $stmt = $connection->prepare($query);

            // Bind parameters
            $stmt->bindParam(1, $full_name, PDO::PARAM_STR);
            $stmt->bindParam(2, $email, PDO::PARAM_STR);
            $stmt->bindParam(3, $msg, PDO::PARAM_STR);

            // Execute the statement
            $stmt->execute();

            // Format and send these values in an email
            $to = 'contact@mohzrn.ca';
            $subject = 'Message from your Portfolio site!';
            $message = "You have received a new contact form submission:\n\n";
            $message .= "Name: " . $full_name . "\n";
            $message .= "Email: " . $email . "\n";
            $message .= "Message: " . $msg . "\n";

            echo 'Thank you for contacting me!';
        } catch (PDOException $e) {
            echo 'Error: ' . $e->getMessage();
        }
    } else {
        // Handle your errors appropriately
        echo json_encode($errors);
    }
} else {
    // Not a POST request
    echo 'Invalid request method.';
}

// Close the connection
$connect = null;

?>
