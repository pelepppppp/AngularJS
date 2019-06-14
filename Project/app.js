var application = angular.module("myApp", ["ngRoute"])
application.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			controller: "indexController",
			controllerAs: "index",
			templateUrl: "views/index.html"
		})
		.when("/aboutUs", {
			controller: "aboutUsController",
			controllerAs: "aboutUs",
			templateUrl: "views/aboutUs.html"
		})
		.when("/faq", {
			controller: "faqController",
			controllerAs: "faq",
			templateUrl: "views/faq.html"
		})
		.otherwise({
			redirectTo: "/"
		})
})

	