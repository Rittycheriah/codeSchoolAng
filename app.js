(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
	{
		name: 'Dodecahedron', 
		price: 2.95, 
		description: '...... ',
		canPurchase: true
	}, 
	{
		name: "Pentagonal Gem", 
		price: 5.95, 
		description: ". . . . ",
		canPurchase: false
	}
	]

	app.controller("ReviewController", function() {
		this.review = {};

		this.AddReview = function(product)
		{
			product.reviews.push(this.review)
		}
	});

	// these are best used for UI widgets etc.

	app.directive('productTitle', function() {
		return {
			restrict: 'E', 
			templateUrl: 'product-title.html'
		}
	});


// this is an attribute ex. 
	app.directive('productTitle' function() {
		return {
			restrict: 'A', 
			templateUrl: 'product-title.html'
		}
	})
	
})()