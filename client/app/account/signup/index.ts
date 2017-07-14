'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('mcitrainerApp.signup', [])
    .controller('SignupController', SignupController)
    .name;
