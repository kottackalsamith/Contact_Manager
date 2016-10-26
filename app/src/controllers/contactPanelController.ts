/// <reference path="../_all.ts" />

module ContactManagerApp {

  export class ContactPanelController {    
    static $inject = ['userService', '$mdBottomSheet'];
    
    constructor(
      private userService: IUserService, 
      private $mdBottomSheet) {
      this.user = userService.selectedUser;
    }

    user: User;

    actions = [
      { name: 'Phone'       , icon: 'phone'       , icon_url: 'css/svg/phone.svg'},
      { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'css/svg/twitter.svg'},
      { name: 'Google+'     , icon: 'google_plus' , icon_url: 'css/svg/google_plus.svg'},
      { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'css/svg/hangouts.svg'}
    ];
    
    submitContact(action): void {
      this.$mdBottomSheet.hide(action);
    }
  }
  
}
