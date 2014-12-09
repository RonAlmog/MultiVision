angular.module('app').controller('mvMainCtrl', function($scope){
    //$scope.myVar = "joe angular";
    $scope.courses = [
        {name: 'C# for sociopaths', featured: true, published: new Date('1/1/2013')},
        {name: 'VB for sociopaths', featured: true, published: new Date('1/1/2013')},
        {name: 'C++ for sociopaths', featured: true, published: new Date('1/1/2014')},
        {name: 'Java for sociopaths', featured: true, published: new Date('1/1/2015')},
        {name: 'XML for sociopaths', featured: true, published: new Date('1/1/2013')},
        {name: 'Angular for sociopaths', featured: true, published: new Date('1/1/2013')},
        {name: '.net 4.5 for sociopaths', featured: true, published: new Date('1/1/2014')},
        {name: 'Android for sociopaths', featured: true, published: new Date('1/1/2014')},
        {name: 'CSS for sociopaths', featured: false, published: new Date('1/1/2014')},
        {name: 'Javascript for sociopaths', featured: false, published: new Date('1/1/2014')},
        {name: 'Algebra for sociopaths', featured: false, published: new Date('1/1/2014')},
        {name: 'Python for sociopaths', featured: false, published: new Date('1/1/2014')},
        {name: 'IOS for sociopaths', featured: false, published: new Date('1/1/2014')},
        {name: 'Windows Phone for sociopaths', featured: false, published: new Date('1/1/2014')}

    ]
});
