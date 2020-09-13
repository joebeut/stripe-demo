<?php 
	// getConfirmation.php
	// This file retrieves the order info from the PHP Session variables and returns them as a JSON object
	session_start();

	$confirmation = array(
		'stripePaymentId' => $_SESSION['stripePaymentId'],
		'orderSubtotal' => $_SESSION['subtotal'],
		'orderTotal' => $_SESSION['total'],
		'orderItems' => $_SESSION['cart']
	);

	echo $json_response = json_encode($confirmation);
?>



