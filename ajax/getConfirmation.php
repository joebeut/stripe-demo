<?php 
	// getConfirmation.php
	// This file retrieves the order info from the PHP Session variables and returns them as a JSON object
	session_start();

	require '../vendor/autoload.php';

	// Retrieve this paymentIntent
	$stripe = new \Stripe\StripeClient(
  		'sk_test_51HQ5M8KExCRHmG0y4qJlVG2Z4IDp0uQqUzeScnCuuUnuOI458Qz67lkjn8Hc211Qtxol0bKpM4SRpSsc01CHI4Kw00P8Q4CADt'
	);
	$paymentIntent = $stripe->paymentIntents->retrieve(
	  $_SESSION['stripePaymentId'],
	  []
	);

	$_SESSION['stripeChargeId'] = $paymentIntent->charges->data[0]['id']; 

	$confirmation = array(
		'stripePaymentId' => $_SESSION['stripePaymentId'],
		'stripeChargeId' => $_SESSION['stripeChargeId'],
		'orderSubtotal' => $_SESSION['subtotal'],
		'orderTotal' => $_SESSION['total'],
		'orderItems' => $_SESSION['cart']
	);

	echo $json_response = json_encode($confirmation);
?>



