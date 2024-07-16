function chargeCustomer(passedToken) {
    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys
    Stripe.apiKey = "";

    // Token is created using Checkout or Elements!
    // Get the payment token ID submitted by the form:
    let token = request.getParameter("stripeToken");

    // Charge the user's card:
    let params = new HashMap();
    params.put("amount", 1000);
    params.put("currency", "usd");
    params.put("description", "Example charge");
    params.put("source", token);

    let charge = Charge.create(params);
}
