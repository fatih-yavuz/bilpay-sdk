# Bilpay SDK

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Bilpay SDK is the only library you need to start receiving online payments.

  - Import the library
  - Enter merchant key
  - Receive payment

# Easy Intallation!
```npm install bilpay-sdk@1.0.2 --save```

# Easy Integration 
All you need to do is to configure a Bilpay object and create transaction from it.
```
const bilpay = new Bilpay({
    shopName: "BilPay DEMO Shop",
    pubKey: "GC5BU5L3XQ4KF5U27AB266UV2QLVEZYB2R2IE72KWO6STRKZDMWZ4AW2",
    timeOut: 50000,
});

  let amount = 5;
  let information = "Bilpay is easy way to pay!"
  bilpay.createTransaction(amount, information)
    .then((transaction) => {
        transaction.onPayment({
            success: () => {
                console.log("YAYYYY")
            }, fail: () => {
                console.log("Payment Time out")
            }
        });
    });
```

[![Build Status](https://image.prntscr.com/image/axZR6EhFQDOMCAJ8fV2xoQ.png)](https://travis-ci.org/joemccann/dillinger)

# Easy to Extend
Transaction object has an onPayment method that you can set success and failure callbacks

# No Extra CSS is Required
All css are handled in house and in line. More importantly, you do not need to wory about our css desecrating yours.

# No Surprises
All edge cases are handled
[![Build Status](https://image.prntscr.com/image/0fbvoNZURAiW1uOqed44OQ.png)](https://travis-ci.org/joemccann/dillinger)

