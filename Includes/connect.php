<?php
$dsn = "mysql:host=localhost;dbname=qlqmbaq3_moh_zrn_portfolio;charset=utf8mb4";
try {
$connection = new PDO($dsn, 'qlqmbaq3_moh_zrn_portfolio', 'Skullcrusher-123');
} catch (Exception $e) {
  error_log($e->getMessage());
  exit('unable to connect');
}
?>