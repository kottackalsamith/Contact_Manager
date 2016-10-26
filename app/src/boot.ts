/// <reference path="_all.ts" />

module ContactManagerApp {
    angular.module('contactManagerApp', ['ngMaterial', 'ngMdIcons'])
        .service('userService', UserService)
        .controller('MainController', MainController)
        .config(($mdIconProvider: angular.material.IIconProvider,
            $mdThemingProvider: angular.material.IThemingProvider) => {
            $mdIconProvider
                .defaultIconSet('./css/svg/avatars.svg', 128)
                // .icon('phone', './css/svg/menu.svg', 512)
                // .icon('google_plus', './css/svg/google_plus.svg', 512)
                // .icon('hangouts', './css/svg/hangouts.svg', 512)
                // .icon('twitter', './css/svg/twitter.svg', 512)
                .icon('menu', './css/svg/menu.svg', 24);
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
        });
}