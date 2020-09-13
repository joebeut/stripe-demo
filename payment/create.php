<?php
  // create.php - provided by Stripe Payment API, passes order total from Session to create a paymentIntent and return the client secret.
  session_start();

  require '../vendor/autoload.php';
  // This is your real test secret API key.
  \Stripe\Stripe::setApiKey('sk_test_51HQ5M8KExCRHmG0y4qJlVG2Z4IDp0uQqUzeScnCuuUnuOI458Qz67lkjn8Hc211Qtxol0bKpM4SRpSsc01CHI4Kw00P8Q4CADt');

  try {
    
    $paymentIntent = \Stripe\PaymentIntent::create([
      'amount' => $_SESSION['stripeTotal'],
      'currency' => 'usd',
    ]);
    $output = [
      'clientSecret' => $paymentIntent->client_secret,
    ];
    echo json_encode($output);

  } catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
  }

?>