Answer one:
var app = angular.module("gemStore", [ ]);


Answer two:
(function(){
    var gem = { name: 'Azurite', price: 2.95 };
    var app = angular.module('gemStore', []);
    app.controller('StoreController', function() {
        this.product = gem;
    });
})();


Answer three:
They added the canPurchase and soldOut data to var
(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        name: 'Azurite',
        price: 110.50,
        canPurchase: false,
        soldOut: true
    };
})();


Answer four:
(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        { name: 'Azurite', price: 2.95 },
        { name: 'Bloodstone', price: 5.95 },
        { name: 'Zircon', price: 3.95 }
    ];
})();
