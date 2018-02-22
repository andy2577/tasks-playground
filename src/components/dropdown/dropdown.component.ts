import { Component, Input, Output } from 'angular-ts-decorators';

@Component({
  selector: 'dropDown',
  template: ` <span
                uib-dropdown
                on-toggle="$ctrl.toggled(open)">
                <button
                  id="single-button"
                  type="button"
                  class="btn btn-primary"
                  uib-dropdown-toggle
                  ng-disabled="disabled">
                   Select a Doctor <span class="caret"></span>
                </button>
                <ul
                  class="dropdown-menu"
                  uib-dropdown-menu
                  role="menu"
                  aria-labelledby="single-button">
                  <li role="menuitem" ng-repeat="choice in $ctrl.items">
                    <a href>{{choice}}</a>
                  </li>
                </ul>
              </span>`
})

export class DropDown implements ng.IComponentController {
  @Input() items;

  status = {
    isopen: false
  };

  toggled(open) {
    console.log('Dropdown is now: ', open);
  };

  toggleDropdown($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  };

}
