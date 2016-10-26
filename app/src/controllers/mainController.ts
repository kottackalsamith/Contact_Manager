/// <reference path="../_all.ts" />

module ContactManagerApp {
    export class MainController {
        static $inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog'];
        constructor(private userService: IUserService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService) {
            var self = this;

            this.userService
                .loadAllUsers()
                .then((users: User[]) => {
                    self.users = users;
                    self.selected = users[0];
                    console.log(self.users);
                })
        }

        tabIndex: number = 0;
        searchText: string = '';
        users: User[] = [];
        selected: User = null;
        message: string = "Hello from our controller";

        toggleSideNav(): void {
            this.$mdSidenav('left').toggle();
        }

        selectUser(user: User): void {
            this.selected = user;

            var sidenav = this.$mdSidenav('left');
            if (sidenav.isLockedOpen()) {
                sidenav.close();
            }

            this.tabIndex = 0;
        }

        clearNotes($event) {
          var confirm =  this.$mdDialog.confirm()
            .title('Are you sure you want to delete all notes?')
            .textContent('All notes will be deleted, you can\'t undo this action')
            .targetEvent($event)
            .ok('Yes')
            .cancel('No');

            var self = this;
            this.$mdDialog.show(confirm).then(() => {
                self.selected.notes = [];
                self.openToast('Cleared Notes');
            }) ;
        }

        removeNote(note: Note): void {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Note was removed");
        }

        openToast(message: string): void {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .position('top right')
                    .hideDelay(3000)
            );
        }
    }
}