var returnedData;
var handler = StripeCheckout.configure({
    key: 'pk_test_UfRlUaLFnRsYn07wdlCe7y6W',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        $.post("https://wt-cd85eb4db96feae6b7f1948a7dfd66d1-0.run.webtask.io/stripe-payment",
            {stripeToken: token.id}, 
            function(data, status) {
                alert("Data: " + data + "\nStatus: " + status);
                returnedData = data;
            }
        );
    }
});
  
document.getElementById('donateButton').addEventListener('click', function(e) {
    // Open Checkout with further options:
    handler.open({
        name: 'Stripe.com',
        description: '2 widgets',
        zipCode: true,
        amount: 2000
    });
    e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
    handler.close();
});