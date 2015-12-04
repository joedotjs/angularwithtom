app.controller('MainController', function ($scope, Attendees) {

    Attendees.getAttendees().then(function (attendees) {
        $scope.attendees = attendees;
    });

});