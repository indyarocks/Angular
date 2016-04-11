myApp.config(
    function($routeProvider){
        $routeProvider
            .when('/',
                {
                    controller: 'mainCtrl',
                    templateUrl: 'views/main.html'
                }
            )
            .when('/contact-us',
                {
                    controller: 'contactUsCtrl',
                    templateUrl: 'views/contact.html'
                }
            )
            .otherwise({ redirectTo: '/'});
    });