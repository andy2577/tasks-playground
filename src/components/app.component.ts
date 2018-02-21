import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'app',
  template: `<a ui-sref="medical">Medical</a>
              <ui-view></ui-view>
              `
})
export class AppComponent implements ng.IComponentController {}
