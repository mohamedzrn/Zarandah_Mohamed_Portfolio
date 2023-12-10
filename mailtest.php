<?php

require_once('connect.php');

// Define variables and initialize with empty values
$lname = $fname = $email = $msg = "";
$errors = [];

// Processing form data when form is submitted

$lname = trim($_POST['last_name']);
$fname = trim($_POST['first_name']);
$email = trim($_POST['email']);
$msg = trim($_POST['comments']);
    

// Validate for missing values
    if(empty($lname)) {
        $errors['last_name'] = "Please enter your last name.";
    }
    
    if(empty($fname)) {
        $errors['first_name'] = "Please enter your first name.";
    }

    if(empty($msg)){
        $errors['comments'] = "Please provide a comment.";
    }
    

// Validate email for missing value AND a valid email string
    if(empty($email)) {
        $errors['email'] = "Please enter your email address.";
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Please enter a valid email address.";
    }
    
    
    // Check for any errors before inserting in database
    if(empty($errors)){
        // Insert data into the database
        $query = "INSERT INTO contacts (last_name, first_name, email, comments) VALUES ('$lname', '$fname', '$email', '$msg')";
        
        if(mysqli_query($connect, $query)) {
            // Send email
            $to = 'rhaaf@fanshawec.ca'; // Change to your recipient email address
            $subject = 'New Contact Form Submission';
            $message = "You have received a new contact form submission.\n\n";
            $message .= "Last Name: " . $lname . "\n";
            $message .= "First Name: " . $fname . "\n";
            $message .= "Email: " . $email . "\n";
            $message .= "Comments: " . $msg . "\n";
            
            // Use wordwrap() if lines are longer than 70 characters
            $message = wordwrap($message, 70);
            
            // Send email
            mail($to, $subject, $message);
            
            // Redirect to thank you page
            header("Location: thank_you.php");

            exit();

        } else{
            echo "ERROR: Could not able to execute $query. " . mysqli_error($connect);
        }
    }

?>
