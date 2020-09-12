<?php
  	session_start();

	$_SESSION['stripePaymentId'] = $_GET["id"];

	header("location:../#/confirmation");
?>