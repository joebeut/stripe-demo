Welcome to Joe's Swim Shop.

To start, I thought through the main views I would be displaying the customer. I'm am including a home page just for fun, but the critical views are the order page that lists the items for sale, the cart page, and the confirmation page.

Since I am using Angular for the front end/JavaScript, I will have to link out to a PHP page to run process the payment using the Stripe Payments PHP API. Then I will redirect the user back to the Angular app for the confirmation page. 

I like using Angular for my payments app because the single-page architecture makes all of the user interactions feel real-time. I can also use AJAX calls to the MySQL database on the back end to pull any information, like the items and price list. 

My challenge here is not to copy a previous app that I've built with Stripe, and to not add too much funcationality.

A few things that could be added to the basic functionality:
- Basic CRUD functions like pulling shopping items from DB
- Storing orders in DB
- Storing customer information in DB
- Adding a view for more information on an item before adding it to the cart
- Sending order confirmation view email (AWS SES) or text (Twilio)