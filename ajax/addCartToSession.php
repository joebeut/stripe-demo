<?php 
  // addCartToSession.php
  // This will store all required variables from the shopping cart on the PHP Session so they can be retrieved in other scripts.
  session_start();

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  // $order = $request->order;
  $cart = $request->cart;

  // Prevent basic XSS for user inputed values
  // $customerName = stripslashes($order->customerName);
  // $customerEmail = stripslashes($order->customerEmail);
  $subtotal = stripslashes($cart->subtotal);
  $total = stripslashes($cart->total);

  // $customerName = addslashes($order->customerName);
  // $customerEmail = addslashes($order->customerEmail);
  $subtotal = addslashes($cart->subtotal);
  $total = addslashes($cart->total);


  // REPLACE THE ASCII CODE WITH THE @ FOR EMAILS.....
  // $customerEmail = str_replace("%64", "@", $customerEmail);

  // Set customer session variables
  // $_SESSION['customerName'] = $customerName; 
  // $_SESSION['customerEmail'] = $customerEmail; 
  // $_SESSION['customerPhone'] = $customerPhone; 
  $_SESSION['cart'] = $cart; 
  $_SESSION['subtotal'] = $subtotal; 
  $_SESSION['total'] = $total; 

  // Stripe Price is number of cents, so $9.50 is 950
  $_SESSION['stripeTotal'] = floatval($total)*100; 

  echo $_SESSION['stripeTotal'];
?>



