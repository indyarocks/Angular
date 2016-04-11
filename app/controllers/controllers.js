myApp.controller('mainCtrl', function($scope){
    $scope.customers = [
        {
            name: 'Chandan',
            city: 'Pune'
        },
        {
            name: 'Alok',
            city: 'Karnal'
        },
        {
            name: 'Ruby',
            city: 'Chennai'
        }
    ];

    $scope.addCustomer = function(){
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })
    }
});

myApp.controller('contactUsCtrl', function($scope){
    $scope.users = [
        {
            name: 'Chandan',
            email: 'chandan.jhun@gmail.com'
        },
        {
            name: 'Alok',
            email: 'alok@example.com'
        },
        {
            name: 'Ruby',
            email: 'ruby@example.com'
        }
    ];
});