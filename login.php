<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "moviedb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Data from form
$user = $_POST['username'];
$pass = $_POST['password'];

// This is vulnerable to SQL Injection
$sql = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Successful login
    echo "Logged in successfully";
    echo $result->num_rows;
} else {
    // Login failed
    echo "Invalid username or password";
}

$conn->close();
?>