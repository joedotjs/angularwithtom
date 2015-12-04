app.controller('FormController', function ($scope, Attendees) {

    $scope.submitAttendee = function () {
        Attendees.addAttendee($scope.attendeeName).then(function (attendees) {
            $scope.$parent.attendees = attendees;
        });
    };

});