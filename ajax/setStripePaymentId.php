<?php
	// setStripePaymentID.php
	// This file gets the Stripe Payment Intent ID (starts with "pi_") and stores it on the PHP Session.
  	session_start();

	$_SESSION['stripePaymentId'] = $_GET["id"];

	header("location:../#/confirmation");
?>