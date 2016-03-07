// Inject ui.router
// config object
// Default URL with $urlRouterProvider.otherwise("/");
// Create a state with $stateProvider.state(str, {url:"", templateUrl:""})
// Create a view with ui-view
// Use ui-sref to change state
// Create a substate
// HTML5 mode with $locationProvider.html5Mode(true)
// Pass params to the controller extract from $stateparams

angular.module('app', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: "/home",
      templateUrl: 'home.html',
      controller: function($scope) {
        $scope.test = Math.random(100);
      }
    });

    $stateProvider.state('menu', {
      url: "/menu",
      templateUrl: 'menu.html'
    });

    $stateProvider.state('menu.pizza', {
      url: "/pizza",
      templateUrl: 'menu.pizza.html'
    })

    $stateProvider.state('menu.pasta', {
      url: "/pasta",
      templateUrl: 'menu.pasta.html'
    })
  })











// angular.module('app', ['ui.router'])
//   .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

//     $urlRouterProvider.otherwise("/");
//     $locationProvider.html5Mode(true)

//     $stateProvider
//       .state('home', {
//         url: "/home",
//         templateUrl: "home.html"
//       })
//       .state('menu', {
//         url: "/menu",
//         templateUrl: "menu.html"
//       })
//       .state('menu.pizza', {
//         url: "/pizza",
//         templateUrl: "menu.pizza.html",
//         controller: function($scope) {
//           $scope.toppings = ["Cheese", "Hammy bits", "Crusts"];
//         }
//       })
//       .state('menu.pasta', {
//         url: "/pasta",
//         templateUrl: "menu.pasta.html",
//         controller: function($scope) {
//           $scope.sauce = ["Orange cheese", "Tomatoes", "Meaty hunks"];
//         }
//       });
//   });
