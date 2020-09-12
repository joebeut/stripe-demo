<?php 
  session_start();

  // Stripe Price is number of cents, so $9.50 is 950

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  // $order = $request->order;
  $cart = $request->cart;


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
  $_SESSION['stripeTotal'] = floatval($total)*100; 

  echo $_SESSION['stripeTotal'];
?>



