<?php

// Your connect.php file

$dsn = "mysql:host=localhost;dbname=zarandah_m_portfolio;charset=utf8mb4";

try {
    $connect = new PDO($dsn, 'root', '');
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    error_log($e->getMessage());
    exit('Unable to connect to the database');
}

?>
