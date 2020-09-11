angular.module('stripeApp').controller('orderController', function ($scope, $http, $window, $location) {
  
  // object to store item objects as cart and cart attributes
  $scope.cart = {
    "subtotal": 0,
    "salesTax": 0,
    "total": 0,
    "itemCount": 0,
    "cartItems": []
  }; 

  // Array of item objects to populate the store - could pull from DB or JSON
  $scope.orderItems = [
    {
      "itemId": 0,
      "itemName": "Speedo Vanquisher 2.0 Googles",
      "itemDescription": "Favorite of all levels of swimmer, from recreation to Olympian.",
      "itemType": "Googles",
      "brand": "Speedo",
      "itemPrice": "21.99"
    },
    {
      "itemId": 1,
      "itemName": "Speedo Vanquisher 2.0 Mirrored Googles",
      "itemDescription": "Mirrored for outdoor use. Favorite of all levels of swimmer, from recreation to Olympian.",
      "itemType": "Googles",
      "brand": "Speedo",
      "itemPrice": "24.99"
    },
    {
      "itemId": 2,
      "itemName": "Speedo Speed Socket 2.0 Googles",
      "itemDescription": "Preferred by competitive swimmers for practice and competition.",
      "itemType": "Googles",
      "brand": "Speedo",
      "itemPrice": "31.99"
    },
    {
      "itemId": 3,
      "itemName": "Speedo Speed Socket 2.0 Mirrored Googles",
      "itemDescription": "Mirrored for outdoor performance. Preferred by competitive swimmers for practice and competition.",
      "itemType": "Googles",
      "brand": "Speedo",
      "itemPrice": "34.99"
    },
    {
      "itemId": 4,
      "itemName": "TYR Latex Swim Cap",
      "itemDescription": "Essential swim cap.",
      "itemType": "Swim Cap",
      "brand": "TYR",
      "itemPrice": "3.99"
    },
    {
      "itemId": 4,
      "itemName": "Speedo Silicone Swim Cap",
      "itemDescription": "Stronger material for longer lasting cap.",
      "itemType": "Swim Cap",
      "brand": "Speedo",
      "itemPrice": "8.99"
    },
    {
      "itemId": 5,
      "itemName": "Sporti Floating Swim Fins",
      "itemDescription": "Basic swim fin for recreation or practice.",
      "itemType": "Swim Fins",
      "brand": "Sporti",
      "itemPrice": "19.99"
    },
    {
      "itemId": 6,
      "itemName": "Arena Powerfin Pro Swim Fins",
      "itemDescription": "Preferred Swim Fins for competitive swimmers.",
      "itemType": "Swim Fins",
      "brand": "Arena",
      "itemPrice": "46.99"
    }
  ]; // could pull from DB or JSON


  // Functions loaded on page load
  checkPage();


  $scope.addToCart = function(item) {
    // Add item to cart, stored on the JS controller - could extend to use Ajax calls to store in DB, etc.
    var addItem = item;
    addItem.itemId = $scope.cart.itemCount;

    // Add item price to subtotal, ensure float type match, round to 2 decimals
    $scope.cart.subtotal = parseFloat($scope.cart.subtotal) + parseFloat(addItem.itemPrice);
    $scope.cart.subtotal = parseFloat($scope.cart.subtotal).toFixed(2);

    // Add sales tax, using Texas rate a default
    $scope.cart.salesTax = parseFloat($scope.cart.salesTax) + parseFloat(addItem.itemPrice)*.0825;
    $scope.cart.salesTax = parseFloat($scope.cart.salesTax).toFixed(2);


    // Add item subtotal and tax for this item to the running cart total
    $scope.cart.total = parseFloat($scope.cart.subtotal) + parseFloat($scope.cart.salesTax);
    $scope.cart.total = parseFloat($scope.cart.total).toFixed(2);

    // Increment cart count
    $scope.cart.itemCount = $scope.cart.itemCount+1;

    // Push this item to the cart item array
    $scope.cart.cartItems.push(addItem);
  };

  $scope.removeFromCart = function(item) {
    var removeItem = item;

    // Subtract item price from subtotal, ensure float type match, round to 2 decimals
    $scope.cart.subtotal = parseFloat($scope.cart.subtotal) - parseFloat(removeItem.itemPrice);
    $scope.cart.subtotal = parseFloat($scope.cart.subtotal).toFixed(2);

    // Subtract item sales tax from sales tax
    $scope.cart.salesTax = parseFloat($scope.cart.salesTax) - parseFloat(removeItem.itemPrice)*.0825;
    $scope.cart.salesTax = parseFloat($scope.cart.salesTax).toFixed(2);

    // Add updated subtotal and tax for this item to the running cart total
    $scope.cart.total = parseFloat($scope.cart.subtotal) + parseFloat($scope.cart.salesTax);
    $scope.cart.total = parseFloat($scope.cart.total).toFixed(2);

    // Decrement cart count
    $scope.cart.itemCount = $scope.cart.itemCount-1;

    // Loop through cart to find the item that needs to be removed
    var index = 0;
    for (var i in $scope.cart.cartItems) {
      if ($scope.cart.cartItems[i].itemId == removeItem.itemId) {
          index = i;
          $scope.cart.cartItems.splice(index, 1);
          break; //Stop this loop, we found it!
      }
    }
  }

  $scope.sendToPayment = function(){

  };

  $scope.changePage = function(page){
    $scope.page = page;

    if(page=="order"){
      $location.path('/order', false);
    }
    else if(page=="cart"){
      $location.path('/cart', false);
    }
  }


  function checkPage(){

    if($location.path()=="/home"){
      $scope.page='order';
      $location.path('/order');
    }
    else if($location.path()=="/order"){
      $scope.page='order';
    }
    else if($location.path()=="/cart"){
      $scope.page='cart';
    }
    else if($location.path()=="/confirmation"){
      $scope.page='confirmation';
    }
    
  };


  

});