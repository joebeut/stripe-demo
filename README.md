# Welcome to Joe’s Swim Shop!

## Live demo available at [joebeutler.com/stripe-demo](https://joebeutler.com/stripe-demo).

Joe’s Swim Shop is a basic e-commerce web application that allows you to order the finest in swimming gear. You are able to browse our inventory, add items to your shopping cart, remove items from the cart, and pay for your order with your credit card through Stripe. 

Since Joe’s Swim Shop is similar to other Stripe-enabled apps I have built in the past, I challenged myself not to use any code or designs from previous projects. I mapped out the basic functionality required to provide a suitable e-commerce user experience. I first decided on a concept, then I crafted the product list in a JSON object with the attributes necessary for the shopping experience. These included product name, type, brand, description, and price. Finally, I decided which pages or views I would display to the user, and I started coding.

I chose to use the updated Payment Intents API over the older Charges API I had used previously. Because of this, the Stripe ID displayed on the confirmation page starts with “pi_” instead of “ch_”. I prefer Payments to Checkout because it allows me to insert the Stripe Elements directly into my JavaScript application, so I am able to control the entire design and workflow. During my research, I learned that Payment Intents enables 3Dsecure, which supports an asynchronous payment flow that checks if the payment requires a bank challenge. Since this is a requirement in Europe, it is best to ensure this app is compliant for my soon-to-be global user base.

My preferred framework is a modified LAMP stack that utilizes Angular on the frontend. I like Angular’s capabilities as a single page application, which allows me to dynamically populate html elements with JavaScript variables and make super-fast transitions between pages or views. With a PHP backend, I can build out my own API endpoints that I can hit via AJAX in the Angular controller. I can use PHP to store session variables and query my database.

If I were to build this into a production application, I would need to add both additional user-facing features and build out the backend infrastructure. First, I would add attributes to each item to allow the user to customize their order. For example, I could add item count and options to select the size or color. I also would need to collect more information about the user, like their name, email, and address for billing and shipping. Since I expect my users to become loyal customers, they will need to be able to create accounts with corresponding Stripe customer objects to give them the option to store their payment methods for future use.

On the backend, I need to stand up a database to store the product catalog, order details, and transaction history. Whenever transactions are involved, I tend to lean toward a SQL database, but I’d be tempted to implement a NoSQL DB since the product items could have lots of options that would require flexible and nested attributes. If I plan to allow third-party sellers on my platform, I would also need Connect accounts for each seller to collect my platform fees and faciliate their payouts.

Thank you for visiting Joe’s Swim Shop! We look forward to helping you with all of your swimming gear needs.
