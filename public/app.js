
var myApp = angular.module("myApp", ['infinite-scroll', 'ui-rangeSlider','ngRoute']);

DatingApp.constant("helper", {
    INVITE_STATUS_PENDING : 'pending',
    INVITE_STATUS_APPROVED : 'approved',
    INVITE_STATUS_REJECTED : 'rejected'
});