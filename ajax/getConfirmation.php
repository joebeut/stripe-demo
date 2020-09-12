<?php 
  session_start();

  // Price is number of cents, so $9.50 is 950

  $confirmation = array(
    'stripePaymentId' => $_SESSION['stripePaymentId'],
    'orderSubtotal' => $_SESSION['subtotal'],
    'orderTotal' => $_SESSION['total'],
  );

  echo $json_response = json_encode($confirmation);
?>



