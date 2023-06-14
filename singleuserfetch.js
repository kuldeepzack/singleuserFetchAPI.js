<!DOCTYPE html>
<!-- <html lang="en" -->
<html ng-app="myApp">

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid darkblue;
        }

        h1 {
            text-align: center;
        }
    </style> 
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>

<body ng-controller="myController">

    <h1>DUMMY API HIT</h1>

           <div>{{users.email}}</div> 
    <table>
        <tr>
            <th>id</th>
            <th>email</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>avatar</th>

        </tr>
        <tr >
            <td>{{users.id}}</td>
            <td>{{users.email}}</td>
            <td>{{users.first_name}}</td>
            <td>{{users.last_name}}</td>
            <td>{{users.avatar}} <img src="{{users.avatar}}" alt=""  height=100 width=100></td>
           </tr>

    </table>
    <script>
        angular.module('myApp', [])
            .controller('myController', ['$scope', '$http', function ($scope, $http) {
                $scope.users= [];
                $http.get('https://reqres.in/api/users/2').then(
                    (res) => {
                        debugger
                        $scope.users= res.data.data;
                    },
                    (err) => {
                        alert(err);
                    });   
            }]);
    </script>
    </body>
</html> 
