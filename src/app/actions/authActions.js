"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var reduxConstants_1 = require('../constants/reduxConstants');
var AuthActions = (function () {
    function AuthActions(store) {
        this.store = store;
    }
    AuthActions.prototype.getUserInfo = function () {
        return this.store.select('userInfo');
    };
    AuthActions.prototype.login = function (payload) {
        this.store.dispatch({ type: reduxConstants_1.reduxConstants.SUCCESS_LOGIN, payload: payload });
    };
    AuthActions.prototype.logout = function () {
        this.store.dispatch({ type: reduxConstants_1.reduxConstants.SUCCESS_LOGOUT });
    };
    AuthActions.prototype.errorLogin = function () {
        this.store.dispatch({ type: reduxConstants_1.reduxConstants.ERROR_LOGIN });
    };
    AuthActions = __decorate([
        core_1.Injectable()
    ], AuthActions);
    return AuthActions;
}());
exports.AuthActions = AuthActions;
