app.factory('Attendees', function ($http) {
    return {
        getAttendees: function () {
            var promise = $http.get('/attendees').then(function (response) {
                return response.data;
            });
            return promise;
        },
        addAttendee: function (attendeeName) {
            return $http.post('/attendees', { name: attendeeName }).then(function (response) {
                return response.data;
            });
        }
    };
});